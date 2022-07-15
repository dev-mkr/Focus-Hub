const Task = ({ content }) => {
  return (
    <div className="column-item">
      <p
        onClick={(e) => {
          if (e.target.contentEditable === "true") return;
          e.target.contentEditable = true;

          e.target.focus();
          document.getSelection().selectAllChildren(e.target);

          document.getSelection().collapseToEnd();
        }}
        suppressContentEditableWarning={true}
        onBlur={(e) => {
          e.target.contentEditable = false;
        }}
        onDrop={(e) => e.preventDefault()}
      >
        {content}
      </p>
    </div>
  );
};
export default Task;
