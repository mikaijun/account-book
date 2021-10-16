import { List } from "../molecules/List";
import { list } from "../../types";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  yearMonth: Dayjs;
  income: list[];
  expense: list[];
};

export const Lists: React.FC<Props> = ({
  income,
  expense,
  yearMonth,
}: Props) => {
  const displayIncome = income.filter(
    (item) => dayjs(item.date).format("YYYY/MM") === yearMonth.format("YYYY/MM")
  );
  const displayExpense = expense.filter(
    (item) => dayjs(item.date).format("YYYY/MM") === yearMonth.format("YYYY/MM")
  );
  const incomePrice = displayIncome.reduce((sum, i) => sum + i.price, 0);
  const expensePrice = displayExpense.reduce((sum, i) => sum + i.price, 0);
  return (
    <div>
      <div className="balance">
        <div>残高:{incomePrice - expensePrice}円</div>
        収入:+{incomePrice}円 支出:-{expensePrice}円
      </div>
      <div className="lists">
        <div>
          <p>収入一覧</p>
          {displayIncome.map((income, index) => (
            <List
              id={income.id}
              date={income.date}
              context={income.context}
              price={income.price}
              type="income"
              key={`income-${index}`}
            />
          ))}
        </div>
        <div>
          <p>支出一覧</p>
          {displayExpense.map((expense, index) => (
            <List
              id={expense.id}
              date={expense.date}
              context={expense.context}
              price={expense.price}
              type="expense"
              key={`expense-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
