import React, { useState, useEffect } from "react";

type Props = {
  score: number;
  setScore: (score: number) => number;
};

const EmptyField = ({ setScore, score }: Props) => {
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    setTimeout(() => setWrong(false), 300);
  });

  const CorrectClick = () => {
    setScore(score - 1);
    setWrong(true);
  };

  return (
    <div
      className={`molegame__field ${wrong ? "wrong-field" : ""}`}
      onClick={() => CorrectClick()}
    ></div>
  );
};

export default EmptyField;
