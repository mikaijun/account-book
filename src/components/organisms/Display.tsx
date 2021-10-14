import { useContext, useEffect } from "react";
import { Header } from "../molecules/Header";
import { Balance } from "../atoms/Balance";
import { AccountBookContext } from "../../contexts/AccountBookContexts";

export const Display = () => {
  const { income, expense } = useContext(AccountBookContext);
  useEffect(() => {}, [income, expense]);
  return (
    <div>
      <Header />
      <Balance income={income} expense={expense} />
    </div>
  );
};
