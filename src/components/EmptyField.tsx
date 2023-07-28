import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../store/features/scoreReducer";

const EmptyField = () => {
  const dispatch = useDispatch();
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    setTimeout(() => setWrong(false), 300);
  });

  const CorrectClick = () => {
    dispatch(decrement());
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
