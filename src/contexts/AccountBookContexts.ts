import { createContext } from "react";
import { AccountBookValue } from "../types";

export const AccountBookContext = createContext<AccountBookValue>({
  income: [],
  expense: [],
  setIncome: () => { },
  setExpense: () => { },
});
