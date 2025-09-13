import { useState } from "react";
import { generateTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winningCondition }) {
  let [ticket, setTicket] = useState(generateTicket(n));
  let isWinning = winningCondition(ticket);

  let buyTicket = () => {
    setTicket(generateTicket(n));
  };
  return (
    <div>
      <h2>Lottery Game!</h2>
      <Ticket ticket={ticket} />
      <br />
      <Button action={buyTicket} />
      <h3>{isWinning && "Congrats, you won!"}</h3>
    </div>
  );
}
