/**
 * Converts tab-separated text blocks to markdown tables
 * 
 * Detects blocks of text with tab-separated values and converts them to
 * GitHub Flavored Markdown table format.
 * 
 * @param {string} content - The markdown content to process
 * @returns {string} - Content with tab-separated blocks converted to tables
 */
export function convertTabToTable(content) {
  if (!content || typeof content !== 'string') {
    return content;
  }

  // Split content into lines
  const lines = content.split('\n');
  const result = [];
  let tabBlockLines = [];
  let inTabBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    const isEmpty = trimmedLine.length === 0;
    const hasTabs = line.includes('\t');

    if (hasTabs && !isEmpty) {
      // This line has tabs - it's part of a tab-separated block
      if (!inTabBlock) {
        // Starting a new tab block
        inTabBlock = true;
        tabBlockLines = [line];
      } else {
        // Continuing the tab block
        tabBlockLines.push(line);
      }
    } else if (inTabBlock) {
      // We were in a tab block, but this line doesn't have tabs
      if (isEmpty) {
        // Empty line - check if next line continues the block
        const nextLine = i + 1 < lines.length ? lines[i + 1] : null;
        const nextHasTabs = nextLine && nextLine.includes('\t') && nextLine.trim().length > 0;
        
        if (nextHasTabs) {
          // Next line continues the block, skip this empty line
          continue;
        } else {
          // Next line doesn't continue, end the block
          if (tabBlockLines.length >= 2) {
            const tableMarkdown = convertTabBlockToTable(tabBlockLines);
            result.push(tableMarkdown);
          } else {
            result.push(...tabBlockLines);
          }
          tabBlockLines = [];
          inTabBlock = false;
          result.push(line);
        }
      } else {
        // Non-empty line without tabs - end of tab block
        if (tabBlockLines.length >= 2) {
          const tableMarkdown = convertTabBlockToTable(tabBlockLines);
          result.push(tableMarkdown);
        } else {
          result.push(...tabBlockLines);
        }
        tabBlockLines = [];
        inTabBlock = false;
        result.push(line);
      }
    } else {
      // Not in a tab block, just add the line
      result.push(line);
    }
  }

  // Process any remaining tab block at the end
  if (inTabBlock && tabBlockLines.length >= 2) {
    const tableMarkdown = convertTabBlockToTable(tabBlockLines);
    result.push(tableMarkdown);
  } else if (tabBlockLines.length > 0) {
    result.push(...tabBlockLines);
  }

  return result.join('\n');
}

/**
 * Converts an array of tab-separated lines to markdown table format
 * 
 * @param {string[]} lines - Array of lines with tab-separated values
 * @returns {string} - Markdown table string
 */
function convertTabBlockToTable(lines) {
  // Parse the tab-separated data
  const rows = lines
    .map(line => line.split('\t').map(cell => cell.trim()))
    .filter(row => row.length > 0);

  if (rows.length === 0) {
    return lines.join('\n');
  }

  // Use the first row as header
  const columnCount = rows[0].length;
  
  // Filter rows to only include those with matching column count
  const normalizedRows = rows.filter(row => row.length === columnCount);
  
  if (normalizedRows.length < 2) {
    // Not enough rows, return original
    return lines.join('\n');
  }

  const headerRow = normalizedRows[0];
  const separatorRow = headerRow.map(() => '---');
  const dataRows = normalizedRows.slice(1);

  // Escape pipe characters in cells
  const escapeCell = (cell) => {
    return String(cell || '').replace(/\|/g, '\\|');
  };

  const tableLines = [
    '| ' + headerRow.map(escapeCell).join(' | ') + ' |',
    '| ' + separatorRow.join(' | ') + ' |',
    ...dataRows.map(row => '| ' + row.map(escapeCell).join(' | ') + ' |')
  ];

  return tableLines.join('\n');
}

