import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { ProjectShowcase } from "@/components/sections";

export const metadata: Metadata = buildMetadata({
  title: "Hospitality Refurbishment Projects",
  description:
    "View before-after restaurant refurbishment and takeaway fit-out project examples delivered across the UK.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-6">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema("Projects", "/projects")),
          }}
        />
        <h1 className="text-4xl font-semibold text-white md:text-5xl">Projects</h1>
        <p className="mt-4 text-zinc-300">
          Before-after hospitality refurbishment and fit-out projects for UK
          operators.
        </p>
      </section>
      <ProjectShowcase />
    </>
  );
}
