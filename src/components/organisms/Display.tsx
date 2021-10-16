import { useContext, useEffect } from "react";
import { Header } from "../molecules/Header";
import { Lists } from "../molecules/Lists";
import { Forms } from "../molecules/Forms";
import { AccountBookContext } from "../../contexts/AccountBookContexts";

export const Display = () => {
  const { yearMonth, income, expense } = useContext(AccountBookContext);
  useEffect(() => {}, [yearMonth, income, expense]);
  return (
    <div>
      <Forms />
      <Header />
      <Lists yearMonth={yearMonth} income={income} expense={expense} />
    </div>
  );
};
