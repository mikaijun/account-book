import { createContext } from "react";
import { AccountBookValue } from "../types";
import dayjs from "dayjs";

export const AccountBookContext = createContext<AccountBookValue>({
  yearMonth: dayjs(),
  income: [],
  expense: [],
  setIncome: () => {},
  setExpense: () => {},
  setYearMonth: () => {},
});
