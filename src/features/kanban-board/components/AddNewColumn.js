import React from "react";
import Button from "components/Button";
import { ReactComponent as Plusicon } from "assets/plusicon.svg";

export const AddNewColumn = ({ dispatch }) => {
  const handelClick = (e) => {
    const newColumn = {
      id: `column-${Math.floor(Math.random() * 10000000)}`,
      title: "Untitled list",
      taskIds: [],
    };
    dispatch({ type: "addNewColumn", payload: newColumn });
  };
  return (
    <Button
      onClick={handelClick}
      accessability="Add a new list"
      className="hover:opacity-50 flex justify-center px-5 p-11 focus:outline-none "
    >
      <Plusicon className="w-7 mr-2 " />
      Add a new list
    </Button>
  );
};
