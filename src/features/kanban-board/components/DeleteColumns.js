import React from "react";
const DeleteColumns = ({ dispatch, columnId, index }) => {
  const handelClick = () => {
    dispatch({ type: "deleteColumn", columnId, index });
  };
  return <button onClick={handelClick}>x</button>;
};
export default DeleteColumns;
