
interface GetStatedInterface {
  blog: unknown;
  createdAt: string;
  desc: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  publishedAt: string;
  title: string;
  updatedAt: string;
  className?: string;
  num?: number;
}

export type ReadOnlyGetstartedInterface = Readonly<GetStatedInterface>;

export type NeedGetstartedInterface = Pick<ReadOnlyGetstartedInterface, "desc" | "img" | "title" | "className" | "num" >;