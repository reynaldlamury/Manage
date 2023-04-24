export const initialState = {
  indexDot: 0,
  currentPage: 0,
  indicatorClicked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_INDEXDOT":
      return {
        ...state,
        indexDot: action.value,
      };

    case "GET_CURRENTPAGE":
      return {
        ...state,
        currentPage: action.value,
      };

    case "GET_INDICATORCLICKED":
      return {
        ...state,
        indicatorClicked: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
