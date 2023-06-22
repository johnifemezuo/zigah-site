export interface PolicyInterface {
  title: string;
  content: string;
  date?: string;
  createAt?: string;
  publishedAt?: string;
  updatedAt?: string;
}

export type ReadOnlyPolicyInterface = Readonly<PolicyInterface>;

export type NeededPolicyInterface = Pick<
  ReadOnlyPolicyInterface,
  "title" | "content" | "date"
>;
