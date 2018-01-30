export const addTodo = text => dispatch => {
  dispatch({
      type: 'ADD_TODO',
      text
  });
};

export const changeDone = id => dispatch => {
  dispatch({
      type: "CHANGE_DONE",
      id
  });
}

export const removeAll = () => dispatch => {
  dispatch({
      type: "REMOVE_ALL",
  });
}

export const filter = (searchString) => dispatch => {
  dispatch({
      type: "FILTER_TODOS",
      searchString
  });
}