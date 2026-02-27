import { getAllPages } from "@/lib/getAllPages";

// Required for static export
export const dynamic = "force-static";

export default async function sitemap() {
  const { staticPages, blogPages } = await getAllPages();

  // Convert to sitemap format
  const sitemapPages = staticPages.map((page) => {
    // Set priority based on page type
    let priority = 0.7;
    let changeFreq = "weekly";
    
    if (page.path === "/") {
      priority = 1;
      changeFreq = "weekly";
    } else if (page.path === "/blog") {
      priority = 0.8;
      changeFreq = "daily";
    } else if (page.path === "/contact-us" || page.path === "/privacy-policy" || page.path === "/terms") {
      priority = 0.5;
      changeFreq = "monthly";
    }

    return {
      url: page.url,
      lastModified: new Date(),
      changeFrequency: changeFreq,
      priority,
    };
  });

  const sitemapBlogPages = blogPages.map((page) => ({
    url: page.url,
    lastModified: page.date ? new Date(page.date) : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...sitemapPages, ...sitemapBlogPages];
}

