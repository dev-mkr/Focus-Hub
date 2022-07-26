import React from "react";
import { AddNewTask } from "./AddNewTask";
import ColumnTitle from "./ColumnTitle";
import DeleteColumns from "./DeleteColumns";
const ColumnHeader = ({ columnId, columnTitle, index, dispatch, dragHandleProps }) => {
  return (
    <header {...dragHandleProps} onMouseDown={(e) => e.currentTarget.focus()}>
      <ColumnTitle columnTitle={columnTitle} dispatch={dispatch} columnId={columnId} />
      <AddNewTask dispatch={dispatch} columnId={columnId} />
      <DeleteColumns dispatch={dispatch} columnId={columnId} index={index} />
    </header>
  );
};

export default React.memo(ColumnHeader, (prevProps, nextProps) => {
  return prevProps.columnTitle === nextProps.columnTitle;
});
