const layoutReducer = (
  state = {
    isLoading: false,
    expand: false
  },
  action
) => {
  switch (action.type) {
    case "EXPAND":
      return {
        ...state,
        expand: action.payload
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default layoutReducer;
