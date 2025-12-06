export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime?: string;
  tags?: string[];
  image?: string;
  content?: string;
}
