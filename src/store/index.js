import serviceFormReducer from "../reducers/serviceForm";
import serviceListReducer from "../reducers/serviceList";
import serviceSearchReducer from "../reducers/serviceSearch";
import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
  serviceForm: serviceFormReducer,
  serviceList: serviceListReducer,
  serviceSearch: serviceSearchReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
