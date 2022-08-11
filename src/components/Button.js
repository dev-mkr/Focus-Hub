import React from "react";

const Button = ({ children, accessability, className, handelClick }) => {
  return (
    <button
      onClick={handelClick}
      type="button"
      title={accessability}
      className={className}
      aria-label={accessability}
    >
      {children}
    </button>
  );
};

export default Button;
