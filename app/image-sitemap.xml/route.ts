import { projectHighlights, site } from "@/lib/site-data";

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${projectHighlights
  .map(
    (project) => `  <url>
    <loc>${site.domain}/projects</loc>
    <image:image>
      <image:loc>${site.domain}${project.image}</image:loc>
      <image:title>${project.name}</image:title>
      <image:caption>${project.summary}</image:caption>
    </image:image>
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
