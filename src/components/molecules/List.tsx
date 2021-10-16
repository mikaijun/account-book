import React, { useState, useContext } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { Calendar } from "../atoms/Calendar";
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
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editContent, setContents] = useState<string>(context);
  const [editPrice, setPrice] = useState<number | string>(price);
  const [editDate, setDate] = useState<string>(date);
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
  // TODO: 後で型定義し直す
  const handleChange = (event: any) => {
    if (!event.target) return;
    switch (event.target.name) {
      case "date":
        setDate(event.target.value);
        break;
      case "contents":
        setContents(event.target.value);
        break;
      case "price":
        setPrice(event.target.value);
        break;
      default:
    }
  };

  const resetEdit = () => {
    setContents(context);
    setPrice(price);
    setDate(date);
    setIsEdit(false);
  };

  const toEdit = (editId: number, type: "income" | "expense") => {
    if (type === "income") {
      const updateIncome = income.map((item) => {
        if (item.id === editId) {
          return {
            id: item.id,
            context: editContent,
            price: Number(editPrice),
            date: editDate,
          };
        }
        return item;
      });
      setIncome(updateIncome);
      setIsEdit(false);
    }
    if (type === "expense") {
      const updateExpense = expense.map((item) => {
        if (item.id === editId) {
          return {
            id: item.id,
            context: editContent,
            price: Number(editPrice),
            date: editDate,
          };
        }
        return item;
      });
      setExpense(updateExpense);
      setIsEdit(false);
    }
  };

  return (
    <div>
      {isEdit ? (
        <div className="list">
          <Calendar name={"date"} value={editDate} onChange={handleChange} />
          <Input
            name={"contents"}
            value={editContent}
            onChange={handleChange}
          />
          <Input name={"price"} value={editPrice} onChange={handleChange} />
          <Button text={"編集しない"} onClick={() => resetEdit()} />
          <Button text={"編集する"} onClick={() => toEdit(id, type)} />
        </div>
      ) : (
        <div className="list">
          <p>{date}</p>
          <p>{context}</p>
          <p>{price}</p>
          <Button text={"編集"} onClick={() => setIsEdit(true)} />
          <Button text={"削除"} onClick={() => deleteList(id, type)} />
        </div>
      )}
    </div>
  );
};
