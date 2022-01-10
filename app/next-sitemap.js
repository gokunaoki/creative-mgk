module.exports = {
  siteUrl: "https://creativemgk.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "./out",
  exclude: ["/server-sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://creativemgk.com/server-sitemap.xml", // <==== Add here
    ],
  },
};
