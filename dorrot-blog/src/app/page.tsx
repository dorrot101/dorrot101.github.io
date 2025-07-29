<<<<<<< Updated upstream
import CareerSection from "@/components/home/sections/Career";
import ProfileSection from "@/components/home/sections/Profile";
import SkillSection from "@/components/home/sections/Skill";
import { Box, Button, Divider } from "@mantine/core";
import Link from "next/link";
=======
import { getAllPosts, getAllCategories } from '@/lib/notion';
import BlogPostCard from '@/components/BlogPostCard';
import CategoryFilter from '@/components/CategoryFilter';

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories()
  ]);
>>>>>>> Stashed changes

  return (
<<<<<<< Updated upstream
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="min-h-screen snap-center snap-always">asdf</div>
      <div className="min-h-screen snap-center snap-always">qq</div>
      <div className="min-h-screen snap-center snap-always">ww</div>
      <div className="min-h-screen snap-center snap-always">ee</div>

      {/* <ProfileSection />
      <CareerSection />
      <SkillSection /> */}
=======
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Dorrot Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          개발과 일상을 기록하는 공간입니다
        </p>
      </div>

      <CategoryFilter categories={categories} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            아직 게시된 포스트가 없습니다.
          </p>
        </div>
      )}
>>>>>>> Stashed changes
    </div>
  );
}