import { Header } from "../molecules/Header";
import { Balance } from "../atoms/Balance";

export const Display = () => {
  return (
    <div>
      <Header />
      <Balance income={20000} expense={12000} />
    </div>
  );
};
