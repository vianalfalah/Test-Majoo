const initialState = {
  data: [],
};

export default function todo(state = initialState, action) {
  switch (action.type) {
    case "GET_TODO":
      return { ...state, data: action.payload };
    case "EDIT_TODO":
      const dataUpdate = state.data.map((row) =>
        +row.id === action.payload.data.id
          ? {
              ...row,
              title: action.payload.data.title,
              description: action.payload.data.description,
              status: parseInt(action.payload.data.status),
            }
          : row
      );
      console.log(dataUpdate);
      return { ...state, data: dataUpdate };

    case "DELETE_TODO":
      const dataDelete = state.data.filter(
        (row) => +row.id !== action.payload.data.id
      );
      return { ...state, data: dataDelete };

    case "NEW_TODO":
      const date = new Date(Date());
      const newData = {
        id: state.data[state.data.length - 1].id + 1,
        title: action.payload.data.title,
        description: action.payload.data.description,
        status: action.payload.data.status,
        createdAt: date.toISOString().split(".")[0].split("T")[0],
      };
      console.log(action.payload.data);
      return { ...state, data: [...state.data, newData] };

    default:
      return state;
  }
}
