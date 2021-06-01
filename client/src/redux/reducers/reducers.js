import {
  ADMIN_CATEGORIES_FAIL,
  ADMIN_CATEGORIES_REQUEST,
  ADMIN_CATEGORIES_SUCCESS,
  CATEGORIES_ADV_FAIL,
  CATEGORIES_ADV_REQUEST,
  CATEGORIES_ADV_SUCCESS,
  CATEGORIES_FAIL,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  ELEARNING_FAIL,
  ELEARNING_REQUEST,
  ELEARNING_SUCCESS,
  PAGE_FAIL,
  PAGE_REQUEST,
  PAGE_SUCCESS,
  UPDATE_ADVISOR_FAIL,
  UPDATE_ADVISOR_REQUEST,
  UPDATE_ADVISOR_SUCCESS,
  USER_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
} from "../constants/constants";

export const categoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORIES_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORIES_FAIL:
      return { lading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoriesAdvisorsReducer = (state = { advisors: [] }, action) => {
  switch (action.type) {
    case CATEGORIES_ADV_REQUEST:
      return { loading: true, advisors: [] };
    case CATEGORIES_ADV_SUCCESS:
      return { loading: false, advisors: action.payload };
    case CATEGORIES_ADV_FAIL:
      return { loading: false, advisors: action.payload };
    default:
      return state;
  }
};

export const pageReducer = (state = { page: null }, action) => {
  switch (action.type) {
    case PAGE_REQUEST:
      return { loading: true, page: null };
    case PAGE_SUCCESS:
      return { loading: false, page: action.payload };
    case PAGE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { loading: true, user: null };
    case USER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const elearingReducer = (state = { elearnings: [] }, action) => {
  switch (action.type) {
    case ELEARNING_REQUEST:
      return { loading: true, elearnings: [] };
    case ELEARNING_SUCCESS:
      return { loading: false, elearnings: action.payload };
    case ELEARNING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case ADMIN_CATEGORIES_REQUEST:
      return { loading: true, categories: [] };
    case ADMIN_CATEGORIES_SUCCESS:
      return { loading: false, categories: action.payload };
    case ADMIN_CATEGORIES_FAIL:
      return { lading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateAdvisorsReducer = (state = { advisors: [] }, action) => {
  switch (action.type) {
    case UPDATE_ADVISOR_REQUEST:
      return { loading: true, advisors: [] };
    case UPDATE_ADVISOR_SUCCESS:
      return { loading: false, advisors: action.payload };
    case UPDATE_ADVISOR_FAIL:
      return { lading: false, error: action.payload };
    default:
      return state;
  }
};
