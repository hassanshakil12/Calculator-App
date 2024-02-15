import React from 'react'
import css from "./Button.module.css"

const Button = ({ onClickHandler }) => {
  const buttons = [
    "C",
    "*",
    "/",
    "%",
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    ".",
    "7",
    "8",
    "9",
    "**",
    "0",
    "00",
    "=",
  ];
  return (
    <>
      <div className={`${css.container}`}>
        {buttons.map((btnValue) => (
          <button key={btnValue} 
          onClick={() => onClickHandler(btnValue)}>
            {btnValue}
          </button>
        ))}
      </div>
    </>
  );
};

export default Button