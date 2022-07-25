import { Draggable } from "react-beautiful-dnd";
import React from "react";
import handelContentEditBlur from "../utilities/handelContentEditBlur";
import handelContentEditClick from "../utilities/handelEditClick";

const Task = ({ content, taskId, index, columnId, dispatch }) => {
  const handelDelete = () => {
    console.log(taskId);
    dispatch({ type: "deleteTask", taskId, index, columnId });
  };
  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided) => (
        <div
          className="column-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <p
            onClick={(e) => handelContentEditClick(e)}
            suppressContentEditableWarning={true}
            onBlur={(e) =>
              handelContentEditBlur(e, dispatch, "editTaskContent", taskId)
            }
          >
            {content}
          </p>
          <button onClick={handelDelete}>del</button>
        </div>
      )}
    </Draggable>
  );
};
export default React.memo(Task);
