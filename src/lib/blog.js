import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const blogDir = path.join(process.cwd(), "content/content-pages/blog");

function getBlogFilenames() {
  if (!fs.existsSync(blogDir)) {
    return [];
  }
  return fs.readdirSync(blogDir).filter((filename) => {
    const filePath = path.join(blogDir, filename);
    return (
      fs.statSync(filePath).isFile() &&
      (filename.endsWith(".md") || filename.endsWith(".mdx"))
    );
  });
}

export async function loadAllBlogs() {
  const filenames = getBlogFilenames();

  return filenames
    .map((filename) => {
      try {
        const filePath = path.join(blogDir, filename);
        if (!fs.existsSync(filePath)) {
          return null;
        }
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        // Only return if slug exists
        if (!data.slug) {
          console.warn(`Blog file ${filename} is missing a slug`);
          return null;
        }

        // Normalize slug (remove leading/trailing slashes)
        const normalizedSlug = data.slug ? data.slug.replace(/^\/+|\/+$/g, '') : null;
        
        if (!normalizedSlug) {
          console.warn(`Blog file ${filename} is missing a slug`);
          return null;
        }

        return {
          slug: normalizedSlug,
          title: data.title,
          description: data.description,
          readTime: data.readTime || "5 min read",
          coverImage: data.coverImage || null,
          date: data.date || null,
          canonicalUrl: data.canonicalUrl || null,
        };
      } catch (error) {
        console.error(`Error loading blog file ${filename}:`, error);
        return null;
      }
    })
    .filter((blog) => blog !== null); // Remove any null entries
}

export async function loadBlogBySlug(slug) {
  const filenames = getBlogFilenames();
  
  // Normalize the input slug (remove leading/trailing slashes)
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, '');

  for (const filename of filenames) {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    // Normalize the blog's slug for comparison
    const blogSlug = data.slug ? data.slug.replace(/^\/+|\/+$/g, '') : '';
    
    if (blogSlug === normalizedSlug) {
      return {
        slug: blogSlug, // Return normalized slug
        title: data.title,
        description: data.description,
        readTime: data.readTime || "5 min read",
        coverImage: data.coverImage || null,
        date: data.date || null,
        canonicalUrl: data.canonicalUrl || null,
        content,
      };
    }
  }

  return null;
}

