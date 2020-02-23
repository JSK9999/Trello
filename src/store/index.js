import { createStore, applyMiddleware } from "redux";
import rootReducer from "../modules/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage
};
const enhancedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(enhancedReducer, applyMiddleware(logger));
  const persistor = persistStore(store);
  return { store, persistor };
}
