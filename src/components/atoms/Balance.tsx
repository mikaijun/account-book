import React from "react";
type Props = {
  income: number;
  expense: number;
};
export const Balance: React.FC<Props> = ({ income, expense }: Props) => {
  return (
    <div className="balance">
      <div>残高:{income - expense}円</div>
      収入:+{income}円 支出:-{expense}円
    </div>
  );
};
