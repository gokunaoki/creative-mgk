const Contentful = require("contentful");
const client = Contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getAllPosts(skipLength: number) {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 6,
    skip: skipLength,
    order: "-fields.date",
  });
  if (entries.items) {
    return entries.items;
  }
}

export async function getPostBySlug(slug, preview = false) {
  if (preview) {
    const previewClient = Contentful.createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      host: "preview.contentful.com",
    });
    const entries = await previewClient.getEntries({
      content_type: "post",

      // 取得データの数
      limit: 1,

      // slugの値が引数slugと等しいpostを取得
      "fields.slug[in]": slug,
    });
    if (entries.items) {
      return entries.items[0];
    }
  } else {
    const entries = await client.getEntries({
      content_type: "post",

      // 取得データの数
      limit: 1,

      // slugの値が引数slugと等しいpostを取得
      "fields.slug[in]": slug,
    });
    if (entries.items) {
      return entries.items[0];
    }
  }
}

export async function getPostsByCategory(skipLength: number, category: string) {
  // const categoryName = category === "as-engineer" ? "asEngineer" : category;
  const categoryName = category;
  const entries = await client.getEntries({
    content_type: "post",
    "fields.category.sys.contentType.sys.id": "category", // ←これも必要
    "fields.category.fields.name": categoryName,
    limit: 6,
    skip: skipLength,
    order: "-fields.date",
  });
  if (entries.items) {
    return entries.items;
  }
}

export async function getPostsByTag(skipLength: number, tag: string) {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 6,
    "metadata.tags.sys.id[in]": tag,
    skip: skipLength,
    order: "-fields.date",
  });
  if (entries.items) {
    return entries.items;
  }
}

export async function getPreviewPostBySlug() {}
