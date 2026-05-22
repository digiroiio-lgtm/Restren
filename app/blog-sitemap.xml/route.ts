import { blogPosts, site } from "@/lib/site-data";

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogPosts
  .map(
    (post) => `  <url>
    <loc>${site.domain}/blog/${post.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.70</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
