export const initialState = {
  pos: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSITION":
      return {
        ...state,
        pos: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
