function handelDragEnd(result, globalState, dispatch) {
  const { destination, source, draggableId, type } = result;

  if (!destination) return;

  if (destination.droppableId === source.droppableId && destination.index === source.index) {
    return;
  }

  if (type === "column") {
    const newColumnOrder = Array.from(globalState.columnOrder);
    newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, draggableId);

    dispatch({ type: "columnMove", payload: newColumnOrder });
    return;
  }

  const start = globalState.columns[source.droppableId];
  const finish = globalState.columns[destination.droppableId];

  if (start === finish) {
    const newTaskIds = Array.from(start.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const column = {
      ...start,
      taskIds: newTaskIds,
    };

    dispatch({
      type: "changeTaskInSameColumn",
      columnId: column.id,
      payload: column,
    });
    return;
  }

  const startTaskIds = Array.from(start.taskIds);
  startTaskIds.splice(source.index, 1);
  const newStart = {
    ...start,
    taskIds: startTaskIds,
  };

  const finishTaskIds = Array.from(finish.taskIds);
  finishTaskIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish,
    taskIds: finishTaskIds,
  };

  dispatch({
    type: "moveTaskToDifColumn",
    startId: newStart.id,
    finishId: newFinish.id,
    payload: { [newStart.id]: newStart, [newFinish.id]: newFinish },
  });
}
export default handelDragEnd;
