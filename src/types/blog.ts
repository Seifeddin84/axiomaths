export interface BlogPost {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  slug: string;
  content: string;
  readTime?: number;
}