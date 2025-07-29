'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface CategoryFilterProps {
  categories: string[];
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      router.push('/');
    } else {
      router.push(`/?category=${category}`);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => handleCategoryChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          currentCategory === 'all'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        전체
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}