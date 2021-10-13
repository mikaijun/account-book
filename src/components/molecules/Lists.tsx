import { Income } from "../atoms/Income";
import { Expense } from "../atoms/Expense";

type Props = {
  incomes: { item: string; price: number }[];
  expenses: { item: string; price: number }[];
};

export const Lists: React.FC<Props> = ({ incomes, expenses }: Props) => {
  return (
    <div className="lists">
      <div>
        <p>収入一覧</p>
        {incomes.map((income, index) => (
          <Income
            item={income.item}
            price={income.price}
            key={`income-${index}`}
          />
        ))}
      </div>
      <div>
        <p>支出一覧</p>
        {expenses.map((expense, index) => (
          <Expense
            item={expense.item}
            price={expense.price}
            key={`expense-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
