import { Dayjs } from "dayjs";

export type list = {
  id: number;
  price: number;
  context: string;
  date: string;
};

export type AccountBookValue = {
  yearMonth: Dayjs;
  income: list[];
  expense: list[];
  setYearMonth: (yearMonth: Dayjs) => void;
  setIncome: (income: list[]) => void;
  setExpense: (expense: list[]) => void;
};
