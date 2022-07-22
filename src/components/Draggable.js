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
    // this.style.opacity = "0.5";
    // console.log(e.target.style);
    // const clonedNode = e.target.cloneNode(true);
    // clonedNode.style.opacity = "2";
    // // console.log(());
    // e.dataTransfer.setDragImage(clonedNode, 10, 10);
    // // e.target.style.opacity = "1";
  };

  return (
    <>
      <div
        key={taskId}
        draggable
        onDragStart={(e) => handleDragStart(e, index, taskId, columnId)}
      >
        {children}{" "}
      </div>{" "}
      <DropZone
        index={index}
        columnId={columnId}
        // itemsOrder={itemsOrder}
        // setItemsOrder={setItemsOrder}
        setGlobalState={setGlobalState}
        globalState={globalState}
      />
    </>
  );
};
export default Draggable;
