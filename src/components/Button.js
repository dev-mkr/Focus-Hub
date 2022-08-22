import React from "react";

const Button = ({ children, accessability, className, onClick, onBlur, disabled }) => {
  return (
    <button
      onClick={onClick}
      onBlur={onBlur}
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
