import { Header } from "../molecules/Header";
import { IncomeExpenses } from "../atoms/IncomeExpenses";

export const Display = () => {
  return (
    <div>
      <Header />
      <div className="balance">残高:8000円</div>
      <IncomeExpenses income={20000} expense={12000} />
    </div>
  );
};
