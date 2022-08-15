import { useEffect, useReducer } from "react";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./components/Column";
import Task from "./components/Task";
import { AddNewColumn } from "./components/AddNewColumn";
import reducerFunction from "./utilities/reducerFunction";
import handelDragEnd from "./utilities/handelDragEnd";
import useLocalStorage from "../../Hooks/useLocalStorage";
import initialData from "../../data/initialData";

function Kanban() {
  const [kanbanData, setLocalKanbanData] = useLocalStorage("kanbanData", initialData);
  const [globalState, dispatch] = useReducer(reducerFunction, kanbanData);
  useEffect(() => {
    setLocalKanbanData(globalState);
  }, [globalState]);

  const columns = globalState.columnOrder.map((columnId, index) => {
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
  });

  return (
    <DragDropContext onDragEnd={(result) => handelDragEnd(result, globalState, dispatch)}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <section
            className="bg-primary sm:grid  grid-flow-col auto-cols-[300px] overflow-auto  "
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {columns}
            {provided.placeholder}
            <AddNewColumn dispatch={dispatch} />
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Kanban;
