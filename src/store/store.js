import { createStore } from "redux";
import favReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
const store=createStore(favReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;