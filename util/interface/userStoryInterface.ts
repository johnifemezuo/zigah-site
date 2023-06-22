interface UserStoryInterface {
  createdAt: string;
  description: string;
  name: string;
  productImg: any;
  publishedAt: string;
  title: string;
  updatedAt: string;
  userImg: any;
}

export type ReadOnlyUserStoryInterface = Readonly<UserStoryInterface>;

export type NeedUserStoryInterface = Pick<
  ReadOnlyUserStoryInterface,
  "description" | "name" | "title" | "userImg" | "productImg"
>;
