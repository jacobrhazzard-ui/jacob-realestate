import { getPublishedPosts } from "../blog/posts";
import { getNeighborhoods } from "../san-clemente-neighborhoods/neighborhoods";

export async function GET() {
  const lastModified = "2026-10-23";
  const pages = ["", "/sell", "/buy", "/listings", "/about", "/contact", "/blog", "/san-clemente-neighborhoods", "/oc-relocation-guide",
    "/oc-relocation-guide/south-oc",
    "/oc-relocation-guide/central-oc",
    "/oc-relocation-guide/north-oc",
    "/oc-relocation-guide/east-oc", "/privacy-policy", "/terms-of-use"].map(
    (path) => ({ url: `https://www.jacobhazzardrealestate.com${path}`, lastModified })
  ).concat(
    getPublishedPosts().map((p) => ({ url: `https://www.jacobhazzardrealestate.com/blog/${p.slug}`, lastModified: p.date })),
    getNeighborhoods().map((n) => {
      const latest = getPublishedPosts().find((p) => (p.neighborhoods || []).includes(n.slug));
      const lm = latest && latest.date > n.updated ? latest.date : n.updated;
      return { url: `https://www.jacobhazzardrealestate.com/san-clemente-neighborhoods/${n.slug}`, lastModified: lm };
    })
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
  </url>
`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
