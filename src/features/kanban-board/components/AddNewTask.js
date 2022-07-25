import React from "react";

export const AddNewTask = ({ dispatch, columnId }) => {
  const handelClick = () => {
    dispatch({ type: "addNewTask", columnId });
  };
  return (
    <>
      <button onClick={handelClick}>addNewTask</button>
    </>
  );
};
