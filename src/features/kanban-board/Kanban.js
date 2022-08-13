import { useEffect, useReducer } from "react";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./components/Column";
import Task from "./components/Task";
import { AddNewColumn } from "./components/AddNewColumn";
import reducerFunction from "./utilities/reducerFunction";
import handelDragEnd from "./utilities/handelDragEnd";
import useLocalStorage from "../../Hooks/useLocalStorage";
const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "create video",
    },
    "task-2": {
      id: "task-2",
      content: "edit video",
    },
    "task-3": {
      id: "task-3",
      content: "publish video",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

function Kanban() {
  const [kanbanData, setKanbanData] = useLocalStorage("kanbanData", initialData);
  const [globalState, dispatch] = useReducer(reducerFunction, kanbanData);
  useEffect(() => {
    setKanbanData(globalState);
  }, [globalState]);

  return (
    <DragDropContext onDragEnd={(result) => handelDragEnd(result, globalState, dispatch)}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <section
            className="bg-primary sm:grid  grid-flow-col auto-cols-[300px] overflow-auto  "
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
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
          </section>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Kanban;
