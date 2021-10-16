import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { Calculation } from "../organisms/Calculation";
import { Lists } from "../organisms/Lists";
import { AccountBookContext } from "../../contexts/AccountBookContexts";
import { list } from "../../types";
import "../../css/App.css";

export default function App() {
  const [yearMonth, setYearMonth] = useState<Dayjs>(dayjs());
  const [income, setIncome] = useState<list[]>([]);
  const [expense, setExpense] = useState<list[]>([]);
  return (
    <AccountBookContext.Provider
      value={{
        yearMonth,
        income,
        expense,
        setIncome,
        setExpense,
        setYearMonth,
      }}
    >
      <Calculation />
      <Lists yearMonth={yearMonth} income={income} expense={expense} />
    </AccountBookContext.Provider>
  );
}
