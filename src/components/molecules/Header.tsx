import { Button } from "../atoms/Button";

export const Header = () => {
  return (
    <div className="header">
      <Button text={"←先月"} />
      <p>10月</p>
      <Button text={"次月→"} />
    </div>
  );
};
