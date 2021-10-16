import React, { useContext } from "react";
import { Button } from "../atoms/Button";
import { AccountBookContext } from "../../contexts/AccountBookContexts";

type Props = {
  id: number;
  context: string;
  price: number;
  date: string;
};

export const Income: React.FC<Props> = ({
  id,
  context,
  price,
  date,
}: Props) => {
  const { income, setIncome } = useContext(AccountBookContext);
  const deleteList = (id: number) => {
    const updateIncome = income.filter((item) => item.id !== id);
    setIncome(updateIncome);
  };
  return (
    <div className="list">
      <p>{date}</p>
      <p>{context}</p>
      <p>+{price}</p>
      <Button text={"削除"} onClick={() => deleteList(id)} />
    </div>
  );
};
