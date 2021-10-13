import { createContext } from "react";
import { AccountBookValue } from "../types";

export const AccountBookContext = createContext<AccountBookValue>({
  lists: {
    income: [],
    expense: [],
  },
  setLists: () => {},
});
