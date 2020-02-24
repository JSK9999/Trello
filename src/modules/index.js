import { combineReducers } from "redux";
import listRedcuer from "./listReducer";
import cardReducer from "./cardReducer";
import originReducer from "./originReducers";

const rootReducer = combineReducers({
  origin: originReducer,
  lists: listRedcuer,
  cards: cardReducer
});

export default rootReducer;
