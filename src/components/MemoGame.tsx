import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleGame } from "../store/actions";
import Animals from "./../data/symbolList.json";
import { navigate } from "gatsby";

interface BoardProps {
  id: any;
  value: string;
  isPaired: boolean;
}

const getRandomPic = (amount: number) => {
  const shuffled = [...Animals].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

function shuffleArray(s: BoardProps[]) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const generateBoard = (size: number) => {
  const randomPic = getRandomPic(size / 2);

  const animals = randomPic.map((animal) => {
    return {
      id: null,
      value: animal,
      isPaired: false,
    };
  });

  const mergedAnimals = [...animals, ...animals];

  return shuffleArray(mergedAnimals).map((obj, index: number) => {
    return { ...obj, id: index + 1 };
  });
};

const MemoGame = () => {
  const size = 28;
  const [board, setBoard] = useState(generateBoard(size));
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [firstClicked, setFirstClicked] = useState<number | undefined>();
  const [secendClicked, setSecendClicked] = useState();
  const [result, setResult] = useState<boolean>(false);
  const isGameOn = useSelector((state: RootState) => state.game.isGameOn);
  const dispatch = useDispatch();

  useEffect(() => {
    const gameTimer = setTimeout(() => {
      if (timer.seconds === 59) {
        setTimer({ minutes: timer.minutes + 1, seconds: 0 });
      } else {
        setTimer((prev) => ({ ...prev, seconds: timer.seconds + 1 }));
      }
    }, 1000);

    if (!isGameOn || result) {
      clearTimeout(gameTimer);
    }
  }, [timer]);

  useEffect(() => {
    if (firstClicked && secendClicked) {
      const firstValue = board.find((item) => item.id === firstClicked)?.value;
      const secondValue = board.find(
        (item) => item.id === secendClicked
      )?.value;

      if (firstValue === secondValue) {
        setBoard(
          board.map((obj) => {
            const isFieldPaired =
              obj.id === firstClicked || obj.id === secendClicked;

            return {
              ...obj,
              isPaired: obj.isPaired ? true : isFieldPaired,
            };
          })
        );
      }
    }

    const checkResult = board.every(({ isPaired }) => isPaired === true);
    if (checkResult) {
      setResult(true);
    }
  }, [firstClicked, secendClicked]);

  const resetClick = () => {
    setTimeout(() => {
      setFirstClicked(undefined);
      setSecendClicked(undefined);
    }, 2000);
  };

  const handleClick = (obj: BoardProps) => {
    if (firstClicked && firstClicked !== obj.id) {
      setSecendClicked(obj.id);
      resetClick();
    } else {
      setFirstClicked(obj.id);
    }
  };

  return (
    <>
      <div className="memo__settings">
        <div className="memo__settings-timer">
          {timer.minutes} : {timer.seconds}
        </div>
        <button onClick={() => dispatch(toggleGame(!isGameOn))}>RESET</button>
      </div>
      <div className="memo__board">
        {board.map((field: BoardProps) => {
          const isClicked =
            field.id === firstClicked || field.id === secendClicked;

          const clickedField = isClicked ? "field-clicked" : null;
          const pairedFields = field.isPaired ? "correct-field" : null;
          return (
            <div
              key={field.id}
              className={`memo__board-field ${clickedField} ${pairedFields}`}
              onClick={() => handleClick(field)}
            >
              {(isClicked || field.isPaired) && field.value}
            </div>
          );
        })}
      </div>
      {result && (
        <div className="memo__result">
          <p>CONGRATULATION</p>
          <p>
            You find all the pairs in {timer.minutes} : {timer.seconds}
          </p>
          <button onClick={() => dispatch(toggleGame(false))}>TRY AGAIN</button>
          <button onClick={() => navigate("/")}>GO BACK TO GAMES</button>
        </div>
      )}
    </>
  );
};

export default MemoGame;
