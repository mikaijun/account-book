export type list = {
  price: number;
  context: string;
};

export type lists = {
  income: list[];
  expense: list[];
};

export type AccountBookValue = {
  lists: lists | undefined;
  setLists: (lists: lists | undefined) => void;
};
