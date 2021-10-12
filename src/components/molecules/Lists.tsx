import { Income } from "../atoms/Income";
import { Expense } from "../atoms/Expense";

export const Lists = () => {
  const incomes = [
    {
      item: "収入",
      price: 10000,
    },
    {
      item: "副業",
      price: 10000,
    },
  ];
  const expenses = [
    {
      item: "光熱費",
      price: 10000,
    },
    {
      item: "携帯代",
      price: 2000,
    },
  ];
  return (
    <div className="lists">
      <div>
        <p>収入一覧</p>
        {incomes.map((income) => (
          <Income item={income.item} price={income.price} />
        ))}
      </div>
      <div>
        <p>支出一覧</p>
        {expenses.map((expense) => (
          <Expense item={expense.item} price={expense.price} />
        ))}
      </div>
    </div>
  );
};
