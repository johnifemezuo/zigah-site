/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BlogInterface {
  attributes: {
    article: string;
    author: string;
    categories: any;
    createdAt: string;
    date: string;
    desc: string;
    img?: any;
    publishedAt: string;
    slug?: string;
    title: string;
    updatedAt: string;
    key?: number;
  };
  id: number;
}

export interface BlogI {
  title: string;
  desc: string;
  img: string;
  author: string;
  article?: string;
  date: string;
  slug?: string;
  id: number | string;
}

export type ReadOnlyBlogInterface = Readonly<BlogInterface>;
