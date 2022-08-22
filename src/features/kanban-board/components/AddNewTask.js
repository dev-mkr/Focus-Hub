import React from "react";
import { ReactComponent as Plusicon } from "assets/plusicon.svg";
import Button from "components/Button";
export const AddNewTask = ({ dispatch, columnId }) => {
  const handelClick = () => {
    dispatch({ type: "addNewTask", columnId });
  };
  return (
    <Button
      onClick={handelClick}
      accessability="Add a new task"
      className="hover:opacity-50  backdrop-blur-md mr-1"
    >
      <Plusicon className="w-7  " />
    </Button>
  );
};
