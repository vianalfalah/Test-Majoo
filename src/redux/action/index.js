import axios from "axios";

export const getTodo = () => async (dispatch) => {
  const response = await axios.get(
    "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"
  );

  dispatch({
    type: "GET_TODO",
    payload: response.data,
  });
};

export const editTodo = (id, data) => async (dispatch) => {
  dispatch({
    type: "EDIT_TODO",
    payload: {
      data: {
        id,
        ...data,
      },
    },
  });
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch({
    type: "DELETE_TODO",
    payload: {
      data: {
        id,
      },
    },
  });
};

export const createTodo = (data) => async (dispatch) => {
  dispatch({
    type: "NEW_TODO",
    payload: {
      data,
    },
  });
};
