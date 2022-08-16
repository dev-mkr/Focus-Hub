import produce from "immer";

function reducerFunction(draft, action) {
  switch (action.type) {
    case "moveTaskToDifColumn": {
      draft.columns[action.startId] = action.payload[action.startId];
      draft.columns[action.finishId] = action.payload[action.finishId];
      return;
    }
    case "changeTaskInSameColumn": {
      draft.columns[action.columnId] = action.payload;
      return;
    }
    case "editTaskContent": {
      const task = draft.tasks[action.id];
      if (action.payload !== task.content) {
        draft.tasks[action.id].content = action.payload;
        return;
      }
      return draft;
    }
    case "addNewTask": {
      //💡 create a new task
      const task = {
        id: `task-${Math.floor(Math.random() * 10000000)}`,
        content: "",
      };
      draft.tasks[task.id] = task;
      draft.columns[action.columnId].taskIds.push(task.id);

      //💡 focus on the task after it inserted to the dom
      setTimeout(() => {
        const column = document.querySelector(
          `[data-rbd-droppable-id="${action.columnId}"]`
        );
        const addedTask = column.querySelector(".column-item:last-child p");
        addedTask.click();
      }, 0);

      return;
    }
    case "deleteTask": {
      delete draft.tasks[action.taskId];
      draft.columns[action.columnId].taskIds.splice(action.index, 1);
      return;
    }
    case "addNewColumn": {
      draft.columns[action.payload.id] = action.payload;
      draft.columnOrder.push(action.payload.id);
      return;
    }
    case "deleteColumn": {
      //💡 delete column tasks
      draft.columns[action.columnId].taskIds.map(
        (delTaskId) => delete draft.tasks[delTaskId]
      );
      //💡 delete column
      delete draft.columns[action.columnId];
      draft.columnOrder.splice(action.index, 1);
      return;
    }
    case "editColumnTitle": {
      const column = draft.columns[action.id];
      if (action.payload !== column.title) {
        column.title = action.payload;
        if (action.payload === "") {
          column.title = "Untitled column";
        }
        return;
      }
      return draft;
    }
    case "columnMove": {
      draft.columnOrder = action.payload;
      return;
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

const curriedLoginReducer = produce(reducerFunction);

export default curriedLoginReducer;
