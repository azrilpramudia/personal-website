import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | meowhx",
  description: "The blog is currently in development.",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-macchiato-base px-6 pb-16 pt-32">
      <section className="flex max-w-lg flex-col items-center gap-5 text-center">
        <span className="rounded-full border border-macchiato-blue/20 bg-macchiato-blue/10 px-3 py-1 font-mono text-xs font-medium text-macchiato-blue">
          In Development
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-macchiato-text">
          Blog
        </h1>
        <p className="text-base leading-relaxed text-macchiato-subtext0">
          I&apos;m working on the blog. Please check back soon.
        </p>
      </section>
    </main>
  );
}
