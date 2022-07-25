import React from "react";
import handelContentEditBlur from "../utilities/handelContentEditBlur";
import handelContentEditClick from "../utilities/handelEditClick";
const ColumnTitle = ({ columnTitle, dispatch, columnId }) => {
  return (
    <h3
      className="column-title"
      onClick={(e) => handelContentEditClick(e)}
      suppressContentEditableWarning={true}
      onBlur={(e) => handelContentEditBlur(e, dispatch, "editColumnTitle", columnId)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
        return;
      }}
    >
      {columnTitle}
    </h3>
  );
};

export default ColumnTitle;
