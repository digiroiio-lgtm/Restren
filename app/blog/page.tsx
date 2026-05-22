import Link from "next/link";
import type { Metadata } from "next";
import { blogCategories, blogPosts } from "@/lib/site-data";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hospitality Refurbishment Blog",
  description:
    "SEO content cluster covering restaurant refurbishment, takeaway fit out, commercial kitchens, shop conversions, and business growth.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema("Blog", "/blog")),
        }}
      />
      <h1 className="text-4xl font-semibold text-white md:text-5xl">Blog</h1>
      <p className="mt-4 text-zinc-300">
        Restaurant refurbishment and hospitality fit-out SEO knowledge hub.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-white">
        Blog category architecture
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {blogCategories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.15em] text-zinc-300"
          >
            {category}
          </span>
        ))}
      </div>
      <h2 className="mt-10 text-2xl font-semibold text-white">
        SEO article cluster ideas
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-white/10 bg-zinc-900/60 p-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              {post.category}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="mt-2 text-sm text-zinc-400">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
