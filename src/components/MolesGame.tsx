import React, { useState, useEffect } from "react";
import FieldWithMole from "./FieldWithMole";
import EmptyField from "./EmptyField";

type Props = {
  activeOption: {
    value: number;
    label: string;
    time: number;
    mole: number;
    isActive: boolean;
  };
  score: number;
  setScore: () => number;
  setGame: (boolean: boolean) => boolean;
};

const MolesGame = ({ activeOption, score, setScore, setGame }: Props) => {
  const board = 18;
  const RandomArray = [...new Array(activeOption.mole)].map(() =>
    Math.round(Math.random() * (board - 1))
  );
  const [timer, setTimer] = useState({
    minutes: activeOption.time,
    seconds: 0,
  });
  const [field, setField] = useState(RandomArray);
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (activeOption.mole === 1) {
      setTimeout(() => setField(RandomArray), 1000);
    }
    if (activeOption.mole === 2) {
      setTimeout(() => setField(RandomArray), 500);
    }

    if (activeOption.mole === 3) {
      setTimeout(() => setField(RandomArray), 350);
    }

    setTimeout(() => {
      if (timer.seconds > 0) {
        setTimer((prev) => ({ ...prev, seconds: timer.seconds - 1 }));
      }
      if (timer.seconds === 0) {
        if (timer.minutes === 0) {
          setResult(true);
        } else {
          setTimer({ minutes: timer.minutes - 1, seconds: 59 });
        }
      }
    }, 1000);
  }, [timer]);

  return (
    <>
      {!result && (
        <div className="molegame">
          <div className="molegame__settings">
            <div>
              <p>TIME</p>
              <p>
                {timer.minutes} : {timer.seconds}
              </p>
            </div>
            <div>
              <p>SCORE</p>
              <p>{score}</p>
            </div>
          </div>
          <div className="molegame__field__container">
            {Array(board)
              .fill("")
              .map((_, n) => {
                if (field.includes(n)) {
                  return (
                    <FieldWithMole key={n} setScore={setScore} score={score} />
                  );
                } else {
                  return (
                    <EmptyField key={n} setScore={setScore} score={score} />
                  );
                }
              })}
          </div>
        </div>
      )}
      {result && (
        <div className="molegame__result">
          <h1>CONGRATULATION</h1>
          <p>YOUR SCORE: {score} !</p>
          <button onClick={() => setGame(false)}>TRY AGAIN</button>
        </div>
      )}
    </>
  );
};

export default MolesGame;
