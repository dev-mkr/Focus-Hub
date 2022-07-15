import { useState } from "react";
import Draggable from "../../../components/Draggable";
import DropZone from "../../../components/DropZone";
import Task from "./Task";

const Column = ({ column, tasks, index, taskIds }) => {
  const [itemsOrder, setItemsOrder] = useState(taskIds);

  const columnTasks = itemsOrder.map((taskId) => tasks[taskId]);

  return (
    <div>
      <h3 className="column-title">{column.title}</h3>
      {columnTasks.map((task, index) => (
        <Draggable
          key={task.id}
          index={index}
          columnId={column.id}
          taskId={task.id}
          itemsOrder={itemsOrder}
          setItemsOrder={setItemsOrder}
        >
          <Task content={task.content} />
        </Draggable>
      ))}
      <DropZone
        index={columnTasks.length}
        columnId={column.id}
        itemsOrder={itemsOrder}
        setItemsOrder={setItemsOrder}
      />
    </div>
  );
};
export default Column;
