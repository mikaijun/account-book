import React from "react";
import { list } from "../../types";

type Props = {
  income: list[];
  expense: list[];
};

export const Balance: React.FC<Props> = ({ income, expense }: Props) => {
  const incomePrice = income.reduce((sum, i) => sum + i.price, 0);
  const expensePrice = expense.reduce((sum, i) => sum + i.price, 0);
  return (
    <div className="balance">
      <div>残高:{incomePrice - expensePrice}円</div>
      収入:+{incomePrice}円 支出:-{expensePrice}円
    </div>
  );
};
