// scripts/extractMetadata.ts
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const pagesDir = path.join(process.cwd(), "content/pages");
const seoDir = path.join(process.cwd(), "content/metadata");

if (!fs.existsSync(seoDir)) fs.mkdirSync(seoDir, { recursive: true });

const files = fs.readdirSync(pagesDir).filter(file => file.endsWith(".mdx"));

files.forEach(file => {
  const slug = file.replace(".mdx", "");
  const filePath = path.join(pagesDir, file);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContent);

  if (!data.title || !data.description) {
    console.warn(`⚠️  Skipping ${file} — missing title or description`);
    return;
  }

  const metadata = {
    title: data.title,
    description: data.description,
    canonical: slug === "home"
      ? `https://talesfm.com/`
      : `https://talesfm.com/${slug}`
  };

  const outputPath = path.join(seoDir, `${slug}.ts`);
  fs.writeFileSync(
    outputPath,
    `const metadata = ${JSON.stringify(metadata, null, 2)};\nexport default metadata;\n`
  );
});
