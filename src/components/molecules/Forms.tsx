import { useState, useContext, useEffect } from "react";
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

  useEffect(() => {}, [income, expense]);

  const addList = () => {
    const newValue = { context: contents, price: price };
    plusOrMinus === "plus"
      ? setIncome([...income, newValue])
      : setExpense([...expense, newValue]);
    setContents("");
    setPrice(0);
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
      <Input name={"contents"} value={contents} onChange={handleChange} />
      金額:
      <Input name={"price"} value={price} onChange={handleChange} />円
      <Button text={"追加"} onClick={addList} />
    </div>
  );
};
