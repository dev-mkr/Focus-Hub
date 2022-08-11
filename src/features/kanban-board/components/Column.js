import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import ColumnHeader from "./ColumnHeader";
const Column = ({ columnId, columnTitle, index, children, dispatch }) => {
  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="p-5 border-t border-r border-base bg-primary"
        >
          <ColumnHeader
            dragHandleProps={provided.dragHandleProps}
            columnTitle={columnTitle}
            dispatch={dispatch}
            columnId={columnId}
            index={index}
          />

          <Droppable droppableId={columnId}>
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {children}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
export default Column;
