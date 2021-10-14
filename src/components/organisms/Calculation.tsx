import { useContext } from "react";
import { Forms } from "../molecules/Forms";
import { Lists } from "../molecules/Lists";
import { AccountBookContext } from "../../contexts/AccountBookContexts";

export const Calculation = () => {
  const { income, expense } = useContext(AccountBookContext);
  return (
    <div>
      <Forms />
      <Lists income={income} expense={expense} />
    </div>
  );
};
