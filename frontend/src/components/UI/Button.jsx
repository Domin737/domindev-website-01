import React from "react";
import "./Button.scss";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`ui-button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
