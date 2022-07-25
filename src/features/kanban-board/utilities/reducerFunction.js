function reducerFunction(state, action) {
  switch (action.type) {
    case "moveTaskToDifColumn":
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.startId]: action.payload[action.startId],
          [action.finishId]: action.payload[action.finishId],
        },
      };
    case "changeTaskInSameColumn":
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.columnId]: action.payload,
        },
      };
    case "editTaskContent": {
      const newTask = state.tasks[action.id];
      if (action.payload !== newTask.content) {
        newTask.content = action.payload;
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [action.taskId]: newTask,
          },
        };
      }
      return state;
    }
    case "addNewTask": {
      const task = {
        id: `task-${Math.floor(Math.random() * 10000000)}`,
        content: "",
      };

      const columnTaskIds = [...state.columns[action.columnId].taskIds];
      columnTaskIds.push(task.id);

      const newColumn = {
        ...state.columns[action.columnId],
        taskIds: columnTaskIds,
      };
      //💡 focus on the task after it inserted to the dom
      setTimeout(() => {
        const column = document.querySelector(
          `[data-rbd-droppable-id="${action.columnId}"]`
        );
        const addedTask = column.querySelector(".column-item:last-child p");
        addedTask.click();
      }, 0);
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [task.id]: task,
        },
        columns: {
          ...state.columns,
          [action.columnId]: newColumn,
        },
      };
    }

    case "deleteTask": {
      const column = state.columns[action.columnId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(action.index, 1);

      const tasks = state.tasks;
      const { [action.taskId]: oldTask, ...newTasks } = tasks;

      return {
        ...state,
        tasks: {
          ...newTasks,
        },
        columns: {
          ...state.columns,
          [action.columnId]: {
            ...column,
            taskIds: newTaskIds,
          },
        },
      };
    }
    case "addNewColumn":
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.id]: action.payload,
        },
        columnOrder: [...state.columnOrder, action.payload.id],
      };
    case "deleteColumn": {
      const columnTasksIds = state.columns[action.columnId].taskIds;

      const finalTasks = columnTasksIds.reduce((previousValue, currentValue) => {
        const { [currentValue]: oldTask, ...newTasks } = previousValue;
        return newTasks;
      }, state.tasks);
      //another method
      // const entrise = Object.entries(tasks).filter((task) => {
      //   return !columnIds.includes(task[0]);
      // })
      // const finalTasks = {};
      // entrise.map((task) => {
      // newTasks[task[0]] =  task[1]
      // })

      const columns = state.columns;
      const { [action.columnId]: oldColumn, ...newColumns } = columns;

      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(action.index, 1);

      return {
        tasks: {
          ...finalTasks,
        },
        columns: {
          ...newColumns,
        },
        columnOrder: newColumnOrder,
      };
    }
    case "editColumnTitle": {
      const newColumn = state.columns[action.id];
      if (action.payload !== newColumn.title) {
        newColumn.title = action.payload;
        return {
          ...state,
          columns: {
            ...state.columns,
            [action.columnId]: newColumn,
          },
        };
      }
      return state;
    }
    case "columnMove":
      return {
        ...state,
        columnOrder: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
export default reducerFunction;
