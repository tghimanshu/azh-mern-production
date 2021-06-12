import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  categoriesAdvisorsReducer,
  categoriesReducer,
  pageReducer,
  elearingReducer,
  adminCategoriesReducer,
  updateAdvisorsReducer,
  listFeedbacksReducer,
  singleFeedbackReducer,
  listFormFeedbacksReducer,
  adminAdvisorsReducer,
  adminClientsReducer,
  blogsReducer,
  singleBlogReducer,
} from "./reducers/reducers";

const reducers = combineReducers({
  page: pageReducer,
  categories: categoriesReducer,
  advisors: categoriesAdvisorsReducer,
  elearning: elearingReducer,
  blog: blogsReducer,
  singlePost: singleBlogReducer,
  adminCategories: adminCategoriesReducer,
  adminAdvisors: adminAdvisorsReducer,
  adminClients: adminClientsReducer,
  updateAdvisor: updateAdvisorsReducer,
  feedbacks: listFeedbacksReducer,
  singleFeedback: singleFeedbackReducer,
  formFeedbacks: listFormFeedbacksReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
