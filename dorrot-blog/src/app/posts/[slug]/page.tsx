import { getPostBySlug, getAllPosts } from '@/lib/notion';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-white bg-blue-600 rounded-full px-3 py-1">
            {post.category}
          </span>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('ko-KR')}
          </time>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {post.excerpt}
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded px-3 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {post.coverImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto"
          />
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content || ''}</ReactMarkdown>
      </div>
    </article>
  );
}