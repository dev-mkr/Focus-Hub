import { useState } from "react";
import Draggable from "../../../components/Draggable";
import DropZone from "../../../components/DropZone";
import Task from "./Task";

const Column = ({ children }) => {
  // const [itemsOrder, setItemsOrder] = useState(taskIds);

  // const columnTasks = itemsOrder.map((taskId) => tasks[taskId]);
  //try to use children pattern with context
  return <div>{children}</div>;
};
export default Column;
