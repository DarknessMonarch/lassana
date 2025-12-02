export default function sitemap() {
  return [
    {
      url: "https://lassana.swiftsyn.com/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://lassana.swiftsyn.com/page/about",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: "https://lassana.swiftsyn.com/page/services",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: "https://lassana.swiftsyn.com/page/contact",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
    {
      url: "https://lassana.swiftsyn.com/projects",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://lassana.swiftsyn.com/blog",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.9,
    },

    {
      url: "https://lassana.swiftsyn.com/not-found",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.8,
    },
  ];
}
