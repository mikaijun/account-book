import { useContext, useEffect } from "react";
import { YearMonth } from "../molecules/YearMonth";
import { Forms } from "../molecules/Forms";
import { AccountBookContext } from "../../contexts/AccountBookContexts";

export const Calculation = () => {
  const { yearMonth, income, expense } = useContext(AccountBookContext);
  useEffect(() => {}, [yearMonth, income, expense]);
  return (
    <div>
      <Forms />
      <YearMonth />
    </div>
  );
};
