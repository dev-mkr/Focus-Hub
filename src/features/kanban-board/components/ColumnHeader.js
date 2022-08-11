import React from "react";
import { AddNewTask } from "./AddNewTask";
import ColumnTitle from "./ColumnTitle";
import DeleteColumns from "./DeleteColumns";
const ColumnHeader = ({ columnId, columnTitle, index, dispatch, dragHandleProps }) => {
  return (
    <header
      {...dragHandleProps}
      onMouseDown={(e) => e.currentTarget.focus()}
      className="pb-4 flex justify-between  overflow-wrap group relative focus:outline-none"
    >
      <ColumnTitle columnTitle={columnTitle} dispatch={dispatch} columnId={columnId} />
      <div className=" absolute top-1/2 right-0 translate-y-[-50%] lg:invisible group-hover:visible ">
        <AddNewTask dispatch={dispatch} columnId={columnId} />
        <DeleteColumns dispatch={dispatch} columnId={columnId} index={index} />
      </div>
    </header>
  );
};

export default React.memo(ColumnHeader, (prevProps, nextProps) => {
  return (
    prevProps.columnTitle === nextProps.columnTitle && prevProps.index === nextProps.index
  );
});
