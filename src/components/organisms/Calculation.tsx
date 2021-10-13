import { useContext, useEffect } from "react";
import { Forms } from "../molecules/Forms";
import { Lists } from "../molecules/Lists";
import { AccountBookContext } from "../../contexts/AccountBookContexts";

export const Calculation = () => {
  const { lists, setLists } = useContext(AccountBookContext);
  useEffect(() => {
    const fetchUser = () => {
      setLists({
        income: [
          {
            context: "収入",
            price: 10000,
          },
          {
            context: "副業",
            price: 10000,
          },
        ],
        expense: [
          {
            context: "光熱費",
            price: 10000,
          },
          {
            context: "携帯代",
            price: 2000,
          },
        ],
      });
    };
    fetchUser();
  }, []);
  console.log(lists);
  return (
    <div>
      <Forms />
      {lists ? <Lists lists={lists} /> : <div />}
    </div>
  );
};
