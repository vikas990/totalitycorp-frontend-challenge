import React from "react";
import "./Button.css";

const Button = ({ color, text }) => {
  return (
    <div
      className={`button ${color === "secondary" ? "button_secondary" : ""}`}
    >
      <a href="#foo">{text}</a>
    </div>
  );
};

export default Button;
