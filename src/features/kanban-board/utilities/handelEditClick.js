//💡 fixing the contenteditable problem with drag and drop
const handelContentEditClick = (e) => {
  if (e.target.contentEditable === "true") return;
  e.target.contentEditable = true;
  //moving caret to the end of sentence
  e.target.focus();
  document.getSelection().selectAllChildren(e.target);
  document.getSelection().collapseToEnd();
};

export default handelContentEditClick;
