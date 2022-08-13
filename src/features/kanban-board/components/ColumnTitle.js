import React from "react";
import handelContentEditBlur from "../utilities/handelContentEditBlur";
import handelContentEditClick from "../utilities/handelEditClick";
const ColumnTitle = ({ columnTitle, dispatch, columnId }) => {
  return (
    <h2
      onClick={(e) => handelContentEditClick(e)}
      suppressContentEditableWarning={true}
      onBlur={(e) => handelContentEditBlur(e, dispatch, "editColumnTitle", columnId)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
        return;
      }}
      title="click to edit column title"
      aria-label="click to edit column title"
      className="py-4 text-3xl font-bold opacity-90 overflow-wrap w-3/4 "
    >
      {columnTitle}
    </h2>
  );
};

export default ColumnTitle;
