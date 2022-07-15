const DropZone = ({ index, columnId, itemsOrder, setItemsOrder }) => {
  const handelDragEnter = (e) => {
    e.preventDefault();
    e.target.classList.add("board-dropzone-active");
  };

  const handleDragLeave = (e) => {
    e.target.classList.remove("board-dropzone-active");
  };

  const handleDrop = (e, targetIndex, targetColumnId) => {
    e.preventDefault();
    const source = e.dataTransfer.getData("text/plain");

    const [index, taskId, columnId] = source.split(",");
    console.log(index, taskId, columnId);

    e.target.classList.remove("board-dropzone-active");
    // console.log(targetIndex, targetColumnId);
    console.log(itemsOrder);
    if (columnId === targetColumnId) {
      let newItemsOrder = Array.from(itemsOrder);
      newItemsOrder.splice(+index, 1);
      newItemsOrder.splice(targetIndex, 0, taskId);
      console.log(newItemsOrder);
      setItemsOrder(newItemsOrder);
    }
  };
  return (
    <span
      className="board-dropzone"
      onDragOver={(e) => handelDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDrop(e, index, columnId)}
    ></span>
  );
};
export default DropZone;
