import React from "react";
import css from "./Display.module.css";

const Display = ({ displayValue}) => {
  return (
    <>
      <div className={`${css.container}`}>
        <input type="text" readOnly value={displayValue}/>
      </div>
    </>
  );
};

export default Display;
