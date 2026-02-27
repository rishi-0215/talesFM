import { loadAllBlogs } from "@/lib/blog";

const baseUrl = "https://talesfm.com";

/**
 * Get all pages (static + dynamic) for sitemap and llms.txt
 * This ensures both files stay in sync automatically
 */
export async function getAllPages() {
  // Static pages - add new pages here and they'll appear in both sitemap and llms.txt
  const staticPages = [
    {
      path: "/",
      url: baseUrl,
      description: "Home page - Free online radio and music streaming platform",
    },
    {
      path: "/about-us",
      url: `${baseUrl}/about-us`,
      description: "About us - Learn about TalesFM and our mission",
    },
    {
      path: "/blog",
      url: `${baseUrl}/blog`,
      description: "Blog - Articles about online radio, music streaming, and audio technology",
    },
    {
      path: "/contact-us",
      url: `${baseUrl}/contact-us`,
      description: "Contact us - Get in touch with our team",
    },
    {
      path: "/terms",
      url: `${baseUrl}/terms`,
      description: "Terms of Service - Legal terms and conditions",
    },
    {
      path: "/privacy-policy",
      url: `${baseUrl}/privacy-policy`,
      description: "Privacy Policy - How we handle your data and privacy",
    },
    {
      path: "/author",
      url: `${baseUrl}/author`,
      description: "Author page - Information about content authors",
    },
  ];

  // Dynamic blog posts
  let blogPages = [];
  try {
    const blogs = await loadAllBlogs();
    blogPages = blogs.map((blog) => ({
      path: `/blog/${blog.slug}`,
      url: `${baseUrl}/blog/${blog.slug}`,
      description: `Blog post: ${blog.title || blog.slug.replace(/-/g, " ")}`,
      date: blog.date,
    }));
  } catch (error) {
    console.error("Error loading blogs:", error);
  }

  return {
    staticPages,
    blogPages,
    allPages: [...staticPages, ...blogPages],
  };
}

