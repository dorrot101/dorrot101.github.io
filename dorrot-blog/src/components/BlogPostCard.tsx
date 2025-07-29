import Link from 'next/link';
import { BlogPost } from '@/lib/notion';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {post.coverImage && (
          <div className="h-48 overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-white bg-blue-600 rounded-full px-3 py-1">
              {post.category}
            </span>
            <time className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString('ko-KR')}
            </time>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
              {post.excerpt}
            </p>
          )}
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded px-2 py-1"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}