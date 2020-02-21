import { combineReducers } from "redux";
import listRedcuer from "./listReducer";

const rootReducer = combineReducers({
  lists: listRedcuer
});

export default rootReducer;
