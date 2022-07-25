import React from "react";
export const DeleteColumns = ({ dispatch, columnId, index }) => {
  const handelClick = () => {
    dispatch({ type: "deleteColumn", columnId, index });
  };
  return <button onClick={handelClick}>x</button>;
};
