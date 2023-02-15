import React from "react";

type Props = {
  nrOfGuesses: number;
};

const Gallows = ({ nrOfGuesses }: Props) => {
  const Head = <div className="hangman__head" />;

  const Body = <div className="hangman__body" />;

  const LeftArm = <div className="hangman__larm" />;

  const RightArm = <div className="hangman__rarm" />;

  const LeftLeg = <div className="hangman__lleg" />;

  const RightLeg = <div className="hangman__rleg" />;

  const BodyParts = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg];

  return (
    <div className="gallows">
      {BodyParts.slice(0, nrOfGuesses)}
      <div className="hangman__hang" />
      <div className="hangman__top" />
      <div className="hangman__gallows" />
      <div className="hangman__bottom" />
    </div>
  );
};

export default Gallows;
