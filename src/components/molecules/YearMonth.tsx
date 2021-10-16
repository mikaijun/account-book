import { useContext } from "react";
import dayjs from "dayjs";
import { Button } from "../atoms/Button";
import { AccountBookContext } from "../../contexts/AccountBookContexts";

export const YearMonth = () => {
  const onClick = (type: string) => {
    type === "add"
      ? setYearMonth(dayjs(yearMonth).add(1, "month"))
      : setYearMonth(dayjs(yearMonth).subtract(1, "month"));
  };

  const { yearMonth, setYearMonth } = useContext(AccountBookContext);

  return (
    <div className="yearMonth">
      <Button text={"←先月"} onClick={() => onClick("subtract")} />
      <p>{yearMonth.format("YYYY/MM")}</p>
      <Button text={"次月→"} onClick={() => onClick("add")} />
    </div>
  );
};
