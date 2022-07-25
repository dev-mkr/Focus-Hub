import { useCallback, useState, useReducer } from "react";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./components/Column";
import Task from "./components/Task";
import { AddNewColumn } from "./components/AddNewColumn";
import initialState from "../../data/initialData";
import reducerFunction from "./utilities/reducerFunction";
import handelDragEnd from "./utilities/handelDragEnd";

function Kanban({ data }) {
  const [globalState, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <DragDropContext onDragEnd={(result) => handelDragEnd(result, globalState, dispatch)}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div className="board" {...provided.droppableProps} ref={provided.innerRef}>
            {globalState.columnOrder.map((columnId, index) => {
              const column = globalState.columns[columnId];

              const tasks = column.taskIds.map((taskId) => globalState.tasks[taskId]);
              return (
                <Column
                  key={column.id}
                  columnTitle={column.title}
                  columnId={column.id}
                  dispatch={dispatch}
                  index={index}
                >
                  {tasks.map((task, index) => (
                    <Task
                      key={task.id}
                      taskId={task.id}
                      content={task.content}
                      index={index}
                      columnId={column.id}
                      dispatch={dispatch}
                    />
                  ))}
                </Column>
              );
            })}
            {provided.placeholder}
            <AddNewColumn dispatch={dispatch} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Kanban;
