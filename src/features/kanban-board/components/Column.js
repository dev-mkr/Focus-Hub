import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import ColumnHeader from "./ColumnHeader";
const Column = ({ columnId, columnTitle, index, children, dispatch }) => {
  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <ColumnHeader
            dragHandleProps={provided.dragHandleProps}
            columnTitle={columnTitle}
            dispatch={dispatch}
            columnId={columnId}
            index={index}
          />

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
