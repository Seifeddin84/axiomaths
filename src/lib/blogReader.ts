import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';

const BLOG_DIRECTORY = path.join(process.cwd(), 'blog');

export function getAllBlogPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(BLOG_DIRECTORY)) {
      return [];
    }

    const files = fs.readdirSync(BLOG_DIRECTORY);
    const posts = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(BLOG_DIRECTORY, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        
        // Calculate read time (average 200 words per minute)
        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);

        return {
          title: data.title,
          date: data.date,
          author: data.author,
          excerpt: data.excerpt,
          tags: data.tags || [],
          slug: data.slug,
          content,
          readTime,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const posts = getAllBlogPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export function getLatestBlogPost(): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.length > 0 ? posts[0] : null;
}