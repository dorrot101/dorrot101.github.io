import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  excerpt?: string;
  content?: string;
  coverImage?: string;
}

export async function getDatabase() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return response.results as PageObjectResponse[];
}

export async function getPage(pageId: string) {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response as PageObjectResponse;
}

export async function getBlocks(blockId: string) {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
}

export async function getPageContent(pageId: string) {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}

export function getPageMetaData(page: PageObjectResponse): BlogPost {
  const properties = page.properties;
  
  const title = properties.Title?.type === 'title' 
    ? properties.Title.title[0]?.plain_text || 'Untitled'
    : 'Untitled';
    
  const slug = properties.Slug?.type === 'rich_text'
    ? properties.Slug.rich_text[0]?.plain_text || page.id
    : page.id;
    
  const date = properties.Date?.type === 'date' && properties.Date.date
    ? properties.Date.date.start
    : new Date().toISOString();
    
  const category = properties.Category?.type === 'select' && properties.Category.select
    ? properties.Category.select.name
    : 'Uncategorized';
    
  const tags = properties.Tags?.type === 'multi_select'
    ? properties.Tags.multi_select.map(tag => tag.name)
    : [];
    
  const excerpt = properties.Excerpt?.type === 'rich_text'
    ? properties.Excerpt.rich_text[0]?.plain_text || ''
    : '';
    
  const coverImage = page.cover?.type === 'external'
    ? page.cover.external.url
    : page.cover?.type === 'file'
    ? page.cover.file.url
    : undefined;

  return {
    id: page.id,
    title,
    slug,
    date,
    category,
    tags,
    excerpt,
    coverImage,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const pages = await getDatabase();
  return pages.map(page => getPageMetaData(page));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const pages = await getDatabase();
  const page = pages.find(page => {
    const pageSlug = page.properties.Slug?.type === 'rich_text'
      ? page.properties.Slug.rich_text[0]?.plain_text
      : null;
    return pageSlug === slug;
  });

  if (!page) return null;

  const metadata = getPageMetaData(page);
  const content = await getPageContent(page.id);
  
  return {
    ...metadata,
    content,
  };
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.category === category);
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}