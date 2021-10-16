import { useContext, useEffect } from "react";
import { Balance } from "../atoms/Balance";
import { Header } from "../molecules/Header";
import { Lists } from "../molecules/Lists";
import { Forms } from "../molecules/Forms";
import { AccountBookContext } from "../../contexts/AccountBookContexts";

export const Display = () => {
  const { income, expense } = useContext(AccountBookContext);
  useEffect(() => {}, [income, expense]);
  return (
    <div>
      <Forms />
      <Header />
      <Balance income={income} expense={expense} />
      <Lists income={income} expense={expense} />
    </div>
  );
};
