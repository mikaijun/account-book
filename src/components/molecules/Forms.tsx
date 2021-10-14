import { useState, useContext } from "react";
import { SelectBox } from "../atoms/SelectBox";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { AccountBookContext } from "../../contexts/AccountBookContexts";

export const Forms = () => {
  const [plusOrMinus, setPlusOrMinus] = useState<"plus" | "minus">("plus");
  const [contents, setContents] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const { income, expense, setIncome, setExpense } =
    useContext(AccountBookContext);

  const addList = () => {
    console.log(contents);
    console.log(price);
    console.log(plusOrMinus);
    setIncome([
      ...income,
      {
        context: "収入",
        price: 10000,
      },
      {
        context: "副業",
        price: 10000,
      },
    ]);
    setExpense([
      ...expense,
      {
        context: "光熱費",
        price: 10000,
      },
      {
        context: "携帯代",
        price: 2000,
      },
    ]);
  };

  // TODO: 後で型定義し直す
  const handleChange = (event: any) => {
    if (!event.target) return;
    switch (event.target.name) {
      case "contents":
        setContents(event.target.value);
        break;
      case "price":
        setPrice(event.target.value);
        break;
      case "plusOrMinus":
        setPlusOrMinus(event.target.value);
        break;
      default:
    }
  };
  return (
    <div className="add-items">
      <SelectBox name={"plusOrMinus"} onChange={handleChange} />
      内容:
      <Input name={"contents"} onChange={handleChange} />
      金額:
      <Input name={"price"} onChange={handleChange} />円
      <Button text={"追加"} onClick={addList} />
    </div>
  );
};
