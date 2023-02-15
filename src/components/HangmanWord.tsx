import React from "react";

type Props = {
  guessedLetter: string[];
  word: string;
  reveal?: boolean;
};

const HangmanWord = ({ guessedLetter, word, reveal = false }: Props) => {
  return (
    <div className="word__contener">
      {word.split("").map((letter, index) => (
        <span key={index} className="word__letter">
          <span
            style={{
              visibility:
                guessedLetter.includes(letter) || reveal ? "visible" : "hidden",
              color:
                !guessedLetter.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
