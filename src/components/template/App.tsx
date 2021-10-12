import "../../css/App.css";
import { Display } from "../organisms/Display";
import { Calculation } from "../organisms/Calculation";

export default function App() {
  return (
    <div className="common-container">
      <Display />
      <Calculation />
    </div>
  );
}
