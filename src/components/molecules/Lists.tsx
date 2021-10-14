import { Income } from "../atoms/Income";
import { Expense } from "../atoms/Expense";
import { list } from "../../types";

type Props = {
  income: list[];
  expense: list[];
};

export const Lists: React.FC<Props> = ({ income, expense }: Props) => {
  return (
    <div className="lists">
      <div>
        <p>収入一覧</p>
        {income.map((income, index) => (
          <Income
            context={income.context}
            price={income.price}
            key={`income-${index}`}
          />
        ))}
      </div>
      <div>
        <p>支出一覧</p>
        {expense.map((expense, index) => (
          <Expense
            context={expense.context}
            price={expense.price}
            key={`expense-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
