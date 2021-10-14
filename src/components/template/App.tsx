import { useState } from "react";
import { Display } from "../organisms/Display";
import { Calculation } from "../organisms/Calculation";
import { AccountBookContext } from "../../contexts/AccountBookContexts";
import { list } from "../../types";
import "../../css/App.css";

export default function App() {
  const [income, setIncome] = useState<list[]>([]);
  const [expense, setExpense] = useState<list[]>([]);
  return (
    <AccountBookContext.Provider
      value={{ income, expense, setIncome, setExpense }}
    >
      <Display />
      <Calculation />
    </AccountBookContext.Provider>
  );
}
