const initialState = {
  quote: "",
  quoteList: [],
  isFetched: null
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_QUOTE":
      return Object.assign({}, state, { quote: action.payload });
    case "ADD_QUOTE":
      return Object.assign({}, state, {
        quoteList: [...state.quoteList, action.payload]
      });
    case "FETCHED":
      return Object.assign({}, state, { isFetched: action.payload });
    case "REMOVE_QUOTE":
      let newList = [...state.quoteList];
      newList.splice(action.payload, 1);
      return Object.assign({}, state, { quoteList: [...newList] });
    default:
      return state;
  }
};

export default quotesReducer;
