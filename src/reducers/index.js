import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import quotesReducer from "./quotesReducer";

export default combineReducers({
  layoutReducer,
  quotesReducer
});
