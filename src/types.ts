export type list = {
  price: number;
  context: string;
  date: string;
};

export type AccountBookValue = {
  income: list[];
  expense: list[];
  setIncome: (income: list[]) => void;
  setExpense: (expense: list[]) => void;
};
