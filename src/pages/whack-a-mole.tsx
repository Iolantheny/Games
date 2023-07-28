import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleGame } from "../store/actions";
import { setDifficulty } from "./../store/features/difficultyReducer";
import BackLink from "../components/BackLink";
import Button from "./../components/Button";
import MolesGame from "./../components/MolesGame";

const WhackAMole: React.FC = () => {
  const isGameOn = useSelector((state: RootState) => state.game.isGameOn);
  const difficulty = useSelector(
    (state: RootState) => state.difficulty.difficultyOptions
  );
  const dispatch = useDispatch();
  const findActive = difficulty.find((option) => option.isActive === true);
  const [activeOption, setActiveOption] = useState<any>(findActive);

  useEffect(() => {
    setActiveOption(findActive);
  }, [difficulty, findActive]);

  const handleClick = (value: number) => {
    dispatch(setDifficulty(value));
  };

  return (
    <div className="whackamole">
      <BackLink />
      <div className="whackamole__content">
        <h1>Whack A Mole!</h1>
        {!isGameOn && (
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
            <button
              onClick={() => dispatch(toggleGame(!isGameOn))}
              className="whackamole__start"
            >
              START
            </button>
          </>
        )}
        {isGameOn && <MolesGame activeOption={activeOption} />}
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
