import DropZone from "./DropZone";
import React from "react";
const Draggable = ({
  children,
  index,
  columnId,
  taskId,
  itemsOrder,
  setItemsOrder,
  globalState,
  setGlobalState,
}) => {
  const handleDragStart = (e, index, taskId, columnId) => {
    e.dataTransfer.setData("text/plain", `${index},${taskId},${columnId}`);
  };

  return (
    <>
      <DropZone
        index={index}
        columnId={columnId}
        itemsOrder={itemsOrder}
        setItemsOrder={setItemsOrder}
        setGlobalState={setGlobalState}
        globalState={globalState}
      />
      <div
        key={taskId}
        draggable
        onDragStart={(e) => handleDragStart(e, index, taskId, columnId)}
      >
        {children}{" "}
      </div>
    </>
  );
};
export default Draggable;
