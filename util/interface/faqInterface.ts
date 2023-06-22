interface FaqInterface {
  id: number;
  attributes: {
    answer: string;
    createdAt: string;
    publishedAt: string;
    question: string;
    updatedAt: string;
    id: 1;
  };
}

export type ReadOnlyFaqInterface = Readonly<FaqInterface>;
