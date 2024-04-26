export default function sitemap() {
  return [
    {
      url: "http://www.lassanability.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "http://www.lassanability.com/page/about",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: "http://www.lassanability.com/page/services",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: "http://www.lassanability.com/page/contact",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: "http://www.lassanability.com/projects",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "http://www.lassanability.com/blog",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.9,
    },

    {
      url: "http://www.lassanability.com/not-found",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
  ];
}
