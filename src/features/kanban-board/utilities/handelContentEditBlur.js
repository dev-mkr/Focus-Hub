const handelContentEditBlur = (e, dispatch, dispatchType, id) => {
  e.target.contentEditable = false;
  dispatch({
    type: dispatchType,
    id,
    payload: e.target.textContent.trim(),
  });
};

export default handelContentEditBlur;
