/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://talesfm.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  generateIndexSitemap: false,
  exclude: [], // Add paths to exclude, like '/admin'
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
