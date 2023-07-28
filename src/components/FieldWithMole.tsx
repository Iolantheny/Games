import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useDispatch } from "react-redux";
import { increment } from "../store/features/scoreReducer";

const FieldWithMole = () => {
  const dispatch = useDispatch();
  const [correct, setCorrect] = useState(false);

  const CorrectClick = () => {
    dispatch(increment());
    setCorrect(true);
  };

  return (
    <div
      className={`molegame__field ${correct ? "correct-field" : ""}`}
      onClick={() => CorrectClick()}
    >
      <StaticImage src="./../images/mole-icon.png" alt="mole" />
    </div>
  );
};

export default FieldWithMole;
