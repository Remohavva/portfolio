export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  image: string;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured?: boolean;
}
