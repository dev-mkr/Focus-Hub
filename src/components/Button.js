import React from "react";

const Button = ({ children, accessability, className, handelClick, disabled }) => {
  return (
    <button
      onClick={handelClick}
      type="button"
      title={accessability}
      className={className}
      aria-label={accessability}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
