import { useState } from "react";
import { Display } from "../organisms/Display";
import { Calculation } from "../organisms/Calculation";
import { AccountBookContext } from "../../contexts/AccountBookContexts";
import { lists } from "../../types";
import "../../css/App.css";

export default function App() {
  const [lists, setLists] = useState<lists>();
  return (
    <AccountBookContext.Provider value={{ lists, setLists }}>
      <Display />
      <Calculation />
    </AccountBookContext.Provider>
  );
}
