import React, { useContext } from "react";
import { Button } from "../atoms/Button";
import { AccountBookContext } from "../../contexts/AccountBookContexts";

type Props = {
  id: number;
  context: string;
  price: number;
  date: string;
  type: "income" | "expense";
};

export const List: React.FC<Props> = ({
  id,
  context,
  price,
  date,
  type,
}: Props) => {
  const { income, expense, setIncome, setExpense } =
    useContext(AccountBookContext);
  const deleteList = (id: number, type: "income" | "expense") => {
    if (type === "income") {
      const updateIncome = income.filter((item) => item.id !== id);
      setIncome(updateIncome);
    }

    if (type === "expense") {
      const updateExpense = expense.filter((item) => item.id !== id);
      setExpense(updateExpense);
    }
  };
  return (
    <div className="list">
      <p>{date}</p>
      <p>{context}</p>
      <p>+{price}</p>
      <Button text={"削除"} onClick={() => deleteList(id, type)} />
    </div>
  );
};
