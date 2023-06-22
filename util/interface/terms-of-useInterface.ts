export interface TermsInterface {
  title: string;
  content: string;
  date?: string;
  createAt?: string;
  publishedAt?: string;
  updatedAt?: string;
}

export type ReadOnlyTermsInterface = Readonly<TermsInterface>;

export type NeededTermsInterface = Pick<
  ReadOnlyTermsInterface,
  "title" | "content" | "date"
>;
