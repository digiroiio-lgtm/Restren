import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/site-data";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = blogPosts.find((entry) => entry.slug === slug);
    if (!post) {
      return {};
    }

    return buildMetadata({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
    });
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is covered in: ${post.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "This guide explains project scope, budgets, programme timelines, and key compliance points for UK hospitality refurbishments.",
        },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(post.title, `/blog/${post.slug}`),
          ),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
        {post.category}
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-white">{post.title}</h1>
      <p className="mt-6 text-zinc-300">{post.excerpt}</p>
      <h2 className="mt-10 text-2xl font-semibold text-white">Key takeaways</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-300">
        <li>
          Plan programme duration around approvals, procurement, and handover
          windows.
        </li>
        <li>
          Align refurbishment scope with target customer, menu, and expected
          throughput.
        </li>
        <li>
          Use phased delivery to protect trade and reduce project risk where
          possible.
        </li>
      </ul>
    </article>
  );
}
