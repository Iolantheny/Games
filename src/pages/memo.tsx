import React from "react";
import BackLink from "../components/BackLink";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleGame } from "../store/actions";
import MemoGame from "../components/MemoGame";

const Memo: React.FC = () => {
  const isGameOn = useSelector((state: RootState) => state.game.isGameOn);
  const dispatch = useDispatch();

  return (
    <div className="memo">
      <BackLink />
      <h1>MEMO</h1>
      {!isGameOn && (
        <button onClick={() => dispatch(toggleGame(!isGameOn))}>START</button>
      )}
      {isGameOn && <MemoGame />}
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
