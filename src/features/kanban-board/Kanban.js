import { useEffect, useState } from "react";
import Column from "./components/Column";
import Draggable from "../../components/Draggable";
import DropZone from "../../components/DropZone";
import Task from "./components/Task";
// const initialData = { tasks: {}, columns: {}, columnOrder: [] };
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
    "task-4": {
      id: "task-4",
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
      taskIds: ["task-4"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
function Kanban(props) {
  const [globalState, setGlobalState] = useState(initialData);

  return (
    <div className="board">
      {globalState.columnOrder.map((columnId, index) => {
        const column = globalState.columns[columnId];
        const tasks = column.taskIds.map((taskId) => globalState.tasks[taskId]);

        return (
          <Column
            key={column.id}
            column={column}
            index={index}
            setGlobalState={setGlobalState}
            globalState={globalState}
          >
            <h3 className="column-title">{column.title}</h3>{" "}
            <DropZone
              index={0}
              columnId={column.id}
              setGlobalState={setGlobalState}
              globalState={globalState}
            />
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                index={index}
                columnId={column.id}
                taskId={task.id}
                setGlobalState={setGlobalState}
                globalState={globalState}
              >
                <Task content={task.content} />
              </Draggable>
            ))}
          </Column>
        );
      })}
    </div>
  );
}

export default Kanban;
