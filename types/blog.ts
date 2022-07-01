export interface IBlogProps {
  createdAt: string;
  slug: string;
  title: string;
  description: string;
  headerImage: {
    url: string;
  };
  author: string;
  content: {
    html: string;
  };
  tag: string;
}
