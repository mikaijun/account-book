import { Forms } from "../molecules/Forms";
import { Lists } from "../molecules/Lists";

export const Calculation = () => {
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
    <div>
      <Forms />
      <Lists incomes={incomes} expenses={expenses} />
    </div>
  );
};
