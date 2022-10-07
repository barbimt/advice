import { createStore, applyMiddleware } from "redux";
import adviceReducer from "./reducers/adviceReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"

const store = createStore(adviceReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;