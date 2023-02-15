import React from "react";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type Props = {
  disabled: boolean;
  clicked: string[];
  incorrect: string[];
  addLetter: (letter: string) => void;
};

const Keyboard = ({
  disabled = false,
  clicked,
  incorrect,
  addLetter,
}: Props) => {
  return (
    <div className="keyboard__contener">
      {KEYS.map((key) => {
        const isActive = clicked.includes(key);
        const inActive = incorrect.includes(key);
        return (
          <button
            key={key}
            onClick={() => addLetter(key)}
            className={` keyboard__btn ${isActive ? "active" : ""} ${
              inActive ? "inactive" : ""
            }`}
            disabled={isActive || inActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
