import { combineReducers } from "redux";
import listRedcuer from "./listReducer";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
  lists: listRedcuer,
  cards: cardReducer
});

export default rootReducer;
