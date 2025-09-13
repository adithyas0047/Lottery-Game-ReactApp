import "./App.css";
import Lottery from "./Lottery";
import Ticket from "./Ticket";
import { sum } from "./helper.js";

function App() {
  let winningCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <>
      <Lottery n={3} winningSum={15} winningCondition={winningCondition} />
    </>
  );
}

export default App;
