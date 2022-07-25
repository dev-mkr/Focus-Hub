import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { AddNewTask } from "./AddNewTask";
import ColumnTitle from "./ColumnTitle";
import { DeleteColumns } from "./DeleteColumns";

const Column = ({ columnId, columnTitle, index, children, dispatch }) => {
  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <header
            {...provided.dragHandleProps}
            onMouseDown={(e) => e.currentTarget.focus()}
          >
            <ColumnTitle
              columnTitle={columnTitle}
              dispatch={dispatch}
              columnId={columnId}
            />
            <AddNewTask dispatch={dispatch} columnId={columnId} />
            <DeleteColumns dispatch={dispatch} columnId={columnId} index={index} />
          </header>

          <Droppable droppableId={columnId}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {children}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
export default Column;
