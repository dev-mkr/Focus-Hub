import React from "react";

export const AddNewColumn = ({ dispatch }) => {
  const handelClick = (e) => {
    const newColumn = {
      id: `column-${Math.floor(Math.random() * 10000000)}`,
      title: "title",
      taskIds: [],
    };
    dispatch({ type: "addNewColumn", payload: newColumn });
  };
  return (
    <>
      <button onClick={(e) => handelClick(e)}>addNewColumn</button>
    </>
  );
};
