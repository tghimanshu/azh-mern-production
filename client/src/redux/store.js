import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  categoriesAdvisorsReducer,
  categoriesReducer,
  pageReducer,
  elearingReducer,
} from "./reducers/reducers";

const reducers = combineReducers({
  page: pageReducer,
  categories: categoriesReducer,
  advisors: categoriesAdvisorsReducer,
  elearning: elearingReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
