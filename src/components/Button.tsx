import React from "react";

type Props = {
  isActive: boolean;
  onClick: () => void;
  label: string;
};

const Button = ({ isActive, onClick, label }: Props) => {
  return (
    <button className={isActive ? "btn-active" : ""} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
