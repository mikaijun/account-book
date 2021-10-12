import React from "react";
type Props = {
  income: number;
  expense: number;
};
export const IncomeExpenses: React.FC<Props> = ({ income, expense }: Props) => {
  return (
    <div className="header">
      収入:+{income}円 支出:-{expense}円
    </div>
  );
};
