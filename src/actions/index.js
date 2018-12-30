const SET_QUOTE = "SET_QUOTE";
const ADD_QUOTE = "ADD_QUOTE";
const REMOVE_QUOTE = "REMOVE_QUOTE";
const EXPAND = "EXPAND";
const IS_LOADING = "IS_LOADING";
const FETCHED = "FETCHED";
// Async actions
export const fetchQuote = () => async dispatch => {
  try {
    dispatch(toggleLoading(true));
    const response = await fetch("http://quotes.rest/qod.json");
    const json = await response.json();
    const quote = json.contents.quotes[0]
    dispatch(setQuote(quote));
    dispatch(pushQuoteToList(quote));
    dispatch(toggleLoading(false));
    dispatch(fetched(true));
  } catch (err) {
    dispatch(fetched(false));
    dispatch(toggleLoading(false));
  }
};
// END Async actions

// Quotes actions
export const pushQuoteToList = quote => ({
  type: ADD_QUOTE,
  payload: quote
});

export const removeQuoteFromList = index => ({
  type: REMOVE_QUOTE,
  payload: index
});

export const setQuote = quote => ({
  type: SET_QUOTE,
  payload: quote
});

export const fetched = bool => ({
  type: FETCHED,
  payload: bool
});

// END Quotes actions

// Layout Actions

export const toggleAside = bool => ({
  type: EXPAND,
  payload: bool
});

export const toggleLoading = bool => ({
  type: IS_LOADING,
  payload: bool
});

// END Layout actions
