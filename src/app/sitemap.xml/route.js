export async function GET() {
  const lastModified = "2026-10-22";
  const pages = ["", "/sell", "/buy", "/listings", "/about", "/contact", "/oc-relocation-guide",
    "/oc-relocation-guide/south-oc",
    "/oc-relocation-guide/central-oc",
    "/oc-relocation-guide/north-oc",
    "/oc-relocation-guide/east-oc", "/privacy-policy", "/terms-of-use"].map(
    (path) => ({ url: `https://jacobhazzardrealestate.com${path}`, lastModified })
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
