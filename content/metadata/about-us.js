import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getMetadata() {
  const filePath = path.join(
    process.cwd(),
    "content",
    "pages_metadata",
    "about-us.mdx"
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title || "",
    description: data.description || "",
    canonical: data.canonical || "https://talesfm.com/about-us",
  };
}

export default getMetadata;
