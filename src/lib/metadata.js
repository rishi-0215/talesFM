import fs from "fs";
import path from "path";
import matter from "gray-matter";
export async function loadPageMetadata(slug) {
  try {
    // Check for JS metadata file first
    const jsFilePath = path.join(process.cwd(), "content/metadata", `${slug}.js`);
    if (fs.existsSync(jsFilePath)) {
      const metadataModule = await import(`../../content/metadata/${slug}.js`);
      let metadata;
      if (typeof metadataModule.default === 'function') {
        metadata = metadataModule.default();
      } else {
        metadata = metadataModule.default;
      }

      if (!metadata.title || !metadata.description) {
        console.warn(`⚠️ Metadata incomplete in ${slug}.js`);
        throw new Error("Missing title or description");
      }

      return {
        title: metadata.title,
        description: metadata.description,
        openGraph: {
          title: metadata.title,
          description: metadata.description,
        },
        alternates: {
          canonical: metadata.canonical || (slug === "home"
            ? `https://talesfm.com/`
            : `https://talesfm.com/${slug}`)
        }
      };
    }

    // Fallback to MDX file
    const mdxFilePath = path.join(process.cwd(), "content/pages", `${slug}.mdx`);
    if (fs.existsSync(mdxFilePath)) {
      const fileContent = fs.readFileSync(mdxFilePath, "utf8");
      const { data } = matter(fileContent);

      if (!data.title || !data.description) {
        console.warn(`⚠️ Frontmatter incomplete in ${slug}.mdx`);
        throw new Error("Missing title or description");
      }

      return {
        title: data.title,
        description: data.description,
        openGraph: {
          title: data.title,
          description: data.description,
        },
        alternates: {
          canonical: slug === "home"
            ? `https://talesfm.com/`
            : `https://talesfm.com/${slug}`
        }
      };
    }

    console.warn(`⚠️ Metadata file not found for slug "${slug}"`);
    throw new Error("File not found");

  } catch (err) {
    console.error(`❌ Error loading metadata for slug "${slug}":`, err);

    // Safe fallback
    return {
      title: "talesfm.com",
      description: "Free Global Online Radio Streaming ",
      openGraph: {
        title: "talesfm.com",
        description: "Free Global Online Radio Streaming",
      },
      alternates: {
        canonical: `https://talesfm.com/${slug}`
      }
    };
  }
}
