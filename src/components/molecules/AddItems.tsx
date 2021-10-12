import { SelectBox } from "../atoms/SelectBox";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

export const AddItems = () => {
  return (
    <div className="add-items">
      <SelectBox />
      内容:
      <Input />
      金額:
      <Input />円
      <Button text={"送信"} />
    </div>
  );
};
