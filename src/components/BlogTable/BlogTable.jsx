import React from 'react';

const BlogTable = ({ data, headers, rows, caption, headerBgColor = 'bg-white/10', striped = true }) => {
  // Handle both direct props and data object for flexibility
  const tableHeaders = data?.headers || headers;
  const tableRows = data?.rows || rows;
  const tableCaption = data?.caption || caption;
  const tableBgColor = data?.headerBgColor || headerBgColor;
  const tableStriped = data?.striped !== undefined ? data.striped : striped;

  if (!tableHeaders || !tableRows) {
    return null;
  }

  // Convert headers array to simple strings if they're objects
  const processedHeaders = tableHeaders.map(header => 
    typeof header === 'object' ? header.header : header
  );

  // Convert rows to ensure proper cell structure
  const processedRows = tableRows.map(row => ({
    cells: row.cells ? row.cells.map(cell => 
      typeof cell === 'object' ? cell.cell : cell
    ) : row
  }));

  return (
    <div className="my-8 overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <div className="overflow-hidden border border-white/20 rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-white/20">
            {tableCaption && (
              <caption className="px-6 py-4 text-sm text-white/70 text-left bg-white/5 font-medium">
                {tableCaption}
              </caption>
            )}
            
            {/* Table Header */}
            <thead className={`${tableBgColor}`}>
              <tr>
                {processedHeaders.map((header, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-semibold text-white tracking-wider border-r border-white/10 last:border-r-0 uppercase"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody className="divide-y divide-white/10">
              {processedRows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`
                    ${tableStriped && rowIndex % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}
                    hover:bg-white/10 transition-colors duration-200
                  `}
                >
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-6 py-4 text-sm text-white/80 border-r border-white/10 last:border-r-0 leading-relaxed"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
