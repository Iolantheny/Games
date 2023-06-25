import React, { useEffect, useState } from "react";
import BackLink from "../components/BackLink";
import Button from "./../components/Button";
import MolesGame from "./../components/MolesGame";

const WhackAMole = () => {
  const Difficulty = [
    {
      value: 1,
      label: "easy",
      time: 1,
      mole: 1,
      isActive: true,
    },
    {
      value: 2,
      label: "medium",
      time: 2,
      mole: 2,
      isActive: false,
    },
    {
      value: 3,
      label: "hard",
      time: 3,
      mole: 3,
      isActive: false,
    },
  ];
  const [difficulty, setDifficulty] = useState(Difficulty);
  const findActive = difficulty.find((option) => option.isActive === true);
  const [game, setGame] = useState(false);
  const [activeOption, setActiveOption] = useState(findActive);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setActiveOption(findActive);
  }, [difficulty, findActive]);

  const handleClick = (value) => {
    setDifficulty(
      difficulty.map((option) => {
        return { ...option, isActive: option.value === value };
      })
    );
  };

  return (
    <div className="whackamole">
      <BackLink />
      <div className="whackamole__content">
        <h1>Whack A Mole!</h1>
        {!game && (
          <>
            <p>Select Difficulty</p>
            <div className="whackamole__content--btns">
              {difficulty.map((item) => {
                return (
                  <Button
                    key={item.value}
                    isActive={item.isActive}
                    onClick={() => handleClick(item.value)}
                    label={item.label}
                  />
                );
              })}
            </div>
            <button onClick={() => setGame(true)} className="whackamole__start">
              START
            </button>
          </>
        )}
        {game && (
          <MolesGame
            activeOption={activeOption}
            score={score}
            setScore={setScore}
            setGame={setGame}
          />
        )}
      </div>
      <a
        href="http://www.freepik.com"
        className="whackamole__footer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed by brgfx / Freepik
      </a>
    </div>
  );
};

export default WhackAMole;
