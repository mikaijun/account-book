import { Income } from "../atoms/Income";
import { Expense } from "../atoms/Expense";
import { lists } from "../../types";

type Props = {
  lists: lists;
};

export const Lists: React.FC<Props> = ({ lists }: Props) => {
  return (
    <div className="lists">
      <div>
        <p>収入一覧</p>
        {lists.income.map((income, index) => (
          <Income
            context={income.context}
            price={income.price}
            key={`income-${index}`}
          />
        ))}
      </div>
      <div>
        <p>支出一覧</p>
        {lists.expense.map((expense, index) => (
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
