import { Button } from "../atoms/Button";

export const Header = () => {
  const onClick = () => {
    console.log("発火");
  };
  return (
    <div className="header">
      <Button text={"←先月"} onClick={onClick} />
      <p>10月</p>
      <Button text={"次月→"} onClick={onClick} />
    </div>
  );
};
