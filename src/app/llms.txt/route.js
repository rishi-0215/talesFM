import { getAllPages } from "@/lib/getAllPages";

// Required for static export
export const dynamic = "force-static";

const siteInfo = {
  name: "TalesFM",
  description:
    "Discover, stream, and share your favorite music with the world's most advanced music platform",
  tagline: "Your All-in-one Audio World",
};

export async function GET() {
  // Get all pages from shared function (same as sitemap)
  const { allPages } = await getAllPages();

  // Generate llms.txt content
  const now = new Date();
  const lastUpdated = now.toISOString().split("T")[0];

  let content = `# ${siteInfo.name}\n\n`;
  content += `> ${siteInfo.tagline}\n\n`;
  content += `${siteInfo.description}\n\n`;
  content += `## Available Pages\n\n`;

  // Main pages (non-blog)
  const mainPages = allPages.filter(
    (page) => !page.path.startsWith("/blog/") || page.path === "/blog"
  );

  if (mainPages.length > 0) {
    content += `### Main Pages\n\n`;
    mainPages.forEach((page) => {
      content += `- [${page.description}](${page.url})\n`;
    });
    content += `\n`;
  }

  // Blog posts
  const blogPosts = allPages.filter(
    (page) => page.path.startsWith("/blog/") && page.path !== "/blog"
  );

  if (blogPosts.length > 0) {
    content += `### Blog Posts\n\n`;
    blogPosts.forEach((page) => {
      content += `- [${page.description}](${page.url})\n`;
    });
    content += `\n`;
  }

  content += `## Contact\n\n`;
  content += `- Website: https://talesfm.com\n`;
  content += `- Contact Page: https://talesfm.com/contact-us\n\n`;

  content += `## Last Updated\n\n`;
  content += `This file was last updated on ${lastUpdated}.\n`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

