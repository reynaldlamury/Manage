export const initialState = {
  indexDot: 0,
  currentIndexDot: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_INDEXDOT":
      return {
        ...state,
        indexDot: action.value,
      };

    case "GET_CURRENTINDEXDOT":
      return {
        ...state,
        currentIndexDot: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
