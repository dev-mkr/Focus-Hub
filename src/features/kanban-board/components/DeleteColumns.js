import React from "react";
import { ReactComponent as Xicon } from "../../../assets/xicon.svg";
import Button from "../../../components/Button";

const DeleteColumns = ({ dispatch, columnId, index }) => {
  const handelClick = () => {
    dispatch({ type: "deleteColumn", columnId, index });
  };
  return (
    <Button
      handelClick={handelClick}
      accessability="delete column"
      className="hover:opacity-50 backdrop-blur-md"
    >
      <Xicon className="w-7" />
    </Button>
  );
};
export default DeleteColumns;
