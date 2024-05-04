/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.example.com",
  generateRobotsTxt: true,
  exclude: ["**/404.html", "**/*.json", "**/*.xml"],
  additionalPaths: async (config) => {
    const result = [];
    // include additional dynamic paths
    ["slug-a", "slug-b", "slug-c"].forEach((i) =>
      result.push({
        loc: `/projects/${i}`,
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }),
    );
    return result;
  },
  robotTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
