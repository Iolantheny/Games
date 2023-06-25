import React, { useState, useEffect, useCallback } from "react";
import BackLink from "../components/BackLink";
import Words from "./../data/wordList.json";
import Gallows from "./../components/Gallows";
import HangmanWord from "./../components/HangmanWord";
import Keyboard from "./../components/Keyboard";

const Hangman = () => {
  const [word, setWord] = useState<string>(() => {
    return Words[Math.floor(Math.random() * Words.length)];
  });
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);

  const incorrect = guessedLetter.filter((letter) => !word.includes(letter));

  const Loser = incorrect.length >= 6;

  const Winner = word
    .split("")
    .every((letter) => guessedLetter.includes(letter));

  const addLetter = useCallback(
    (key: string) => {
      if (guessedLetter.includes(key) || Loser || Winner) return;

      setGuessedLetter((letters) => [...letters, key]);
    },
    [guessedLetter, Winner, Loser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetter]);

  return (
    <div className="hangman">
      <BackLink className="black" />
      <div className={`status ${Loser ? "red" : ""}`}>
        {Winner && "WINNER!"}
        {Loser && "LOSER"}
      </div>
      <Gallows nrOfGuesses={incorrect.length} />
      <HangmanWord guessedLetter={guessedLetter} word={word} reveal={Loser} />
      <Keyboard
        disabled={Winner || Loser}
        clicked={guessedLetter.filter((letter) => word.includes(letter))}
        incorrect={incorrect}
        addLetter={addLetter}
      />
    </div>
  );
};

export default Hangman;
