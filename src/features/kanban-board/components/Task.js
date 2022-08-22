import { Draggable } from "react-beautiful-dnd";
import React from "react";
import handelContentEditBlur from "../utilities/handelContentEditBlur";
import handelContentEditClick from "../utilities/handelEditClick";
import { ReactComponent as Xicon } from "assets/xicon.svg";
import Button from "components/Button";

const Task = ({ content, taskId, index, columnId, dispatch }) => {
  const handelDelete = () => {
    dispatch({ type: "deleteTask", taskId, index, columnId });
  };
  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided) => (
        <li
          className="bg-secondary column-item overflow-wrap rounded-lg min-h-[60px] mb-[10px] flex justify-between group relative drop-shadow-xl"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="listitem"
        >
          <p
            onClick={(e) => handelContentEditClick(e)}
            suppressContentEditableWarning={true}
            onBlur={(e) => handelContentEditBlur(e, dispatch, "editTaskContent", taskId)}
            title="click to edit task"
            aria-label="click to edit task"
            className="p-4 text-lg overflow-wrap w-full font-normal opacity-80"
          >
            {content}
          </p>
          <Button
            onClick={handelDelete}
            accessability="delete task"
            className="absolute top-1/2 right-3 translate-y-[-50%] backdrop-blur-md hover:opacity-50 lg:invisible group-hover:visible "
          >
            <Xicon className="w-6" />
          </Button>
        </li>
      )}
    </Draggable>
  );
};
export default React.memo(Task);
