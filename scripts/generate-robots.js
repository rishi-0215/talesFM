import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdxPath = path.join(__dirname, '..', 'content/seo', 'robots.mdx');
const txtPath = path.join(__dirname, '..', 'public', 'robots.txt');

const fileContent = fs.readFileSync(mdxPath, 'utf8');
const { data } = matter(fileContent); // not `content`, use `data`

if (!data.content) {
  console.error('❌ No `content` field found in frontmatter of robots.mdx');
  process.exit(1);
}

fs.writeFileSync(txtPath, data.content.trim(), 'utf8');
console.log('✅ robots.txt generated successfully from frontmatter content.');
