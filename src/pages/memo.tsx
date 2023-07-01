import React, { useState } from "react";
import BackLink from "../components/BackLink";

const Memo = () => {
  const [game, setGame] = useState<boolean>(false);

  return (
    <div className="memo">
      <BackLink />
      <h1>MEMO</h1>
      <button onClick={() => setGame(true)}>START</button>
      <a
        className="memo__footer"
        href="https://pl.freepik.com/darmowe-wektory/tlo-siatki-neonowej_4394259.htm#page=2&query=t%C5%82o%20do%20gry&position=5&from_view=search&track=ais"
      >
        Obraz autorstwa rawpixel.com na Freepik
      </a>
    </div>
  );
};

export default Memo;
