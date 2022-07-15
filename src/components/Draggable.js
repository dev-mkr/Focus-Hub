import DropZone from "./DropZone";
const Draggable = ({
  children,
  index,
  columnId,
  taskId,
  itemsOrder,
  setItemsOrder,
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
