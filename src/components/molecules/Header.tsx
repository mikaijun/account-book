import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button } from "../atoms/Button";

export const Header = () => {
  const onClick = (type: string) => {
    type === "add"
      ? setYearMonth(dayjs(yearMonth).add(1, "month"))
      : setYearMonth(dayjs(yearMonth).subtract(1, "month"));
  };

  const [yearMonth, setYearMonth] = useState<Dayjs>(dayjs());

  return (
    <div className="header">
      <Button text={"←先月"} onClick={() => onClick("subtract")} />
      <p>{yearMonth.format("YYYY/MM")}</p>
      <Button text={"次月→"} onClick={() => onClick("add")} />
    </div>
  );
};
