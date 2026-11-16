import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

type BlogPostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Статья не найдена" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="article">
      <Link className="back-link" href="/blog">
        <span aria-hidden="true">←</span> Все статьи
      </Link>

      <header className="article-header">
        <div className="article-meta">
          <span className="tag">{post.tag}</span>
          <span>{post.readingTime}</span>
          <span aria-hidden="true">·</span>
          <span>{post.level}</span>
          <span className="ssg-badge">SSG</span>
        </div>
        <h1>{post.title}</h1>
        <p className="article-lead">{post.excerpt}</p>
      </header>

      <div className="article-body">
        {post.content.map((block, index) => {
          if (block.type === "heading") {
            return <h2 key={index}>{block.text}</h2>;
          }

          if (block.type === "list") {
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }

          return <p key={index}>{block.text}</p>;
        })}
      </div>

      <footer className="article-footer">
        <span>
          Страница собрана статически через <code>generateStaticParams</code>
        </span>
        <Link className="text-link" href="/blog">
          Другие статьи <span aria-hidden="true">→</span>
        </Link>
      </footer>
    </article>
  );
}
