import {
  ADMIN_ADVISORS_FAIL,
  ADMIN_ADVISORS_REQUEST,
  ADMIN_ADVISORS_SUCCESS,
  ADMIN_CATEGORIES_FAIL,
  ADMIN_CATEGORIES_REQUEST,
  ADMIN_CATEGORIES_SUCCESS,
  ADMIN_CLIENTS_FAIL,
  ADMIN_CLIENTS_REQUEST,
  ADMIN_CLIENTS_SUCCESS,
  ALTER_USER_FAIL,
  ALTER_USER_REQUEST,
  ALTER_USER_SUCCESS,
  BLOG_FAIL,
  BLOG_REQUEST,
  BLOG_SUCCESS,
  CATEGORIES_ADV_FAIL,
  CATEGORIES_ADV_REQUEST,
  CATEGORIES_ADV_SUCCESS,
  CATEGORIES_FAIL,
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  ELEARNING_FAIL,
  ELEARNING_REQUEST,
  ELEARNING_SUCCESS,
  FEEDBACKS_FAIL,
  FEEDBACKS_REQUEST,
  FEEDBACKS_SUCCESS,
  FORM_FEEDBACKS_FAIL,
  FORM_FEEDBACKS_REQUEST,
  FORM_FEEDBACKS_SUCCESS,
  PAGE_FAIL,
  PAGE_REQUEST,
  PAGE_SUCCESS,
  SINGLE_BLOG_FAIL,
  SINGLE_BLOG_REQUEST,
  SINGLE_BLOG_SUCCESS,
  SINGLE_FEEDBACK_FAIL,
  SINGLE_FEEDBACK_REQUEST,
  SINGLE_FEEDBACK_SUCCESS,
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
      return { loading: false, error: action.payload };
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

export const AlterUserReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case ALTER_USER_REQUEST:
      return { loading: true, user: null };
    case ALTER_USER_SUCCESS:
      return { loading: false, user: action.payload };
    case ALTER_USER_FAIL:
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

export const blogsReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case BLOG_REQUEST:
      return { loading: true, blogs: [] };
    case BLOG_SUCCESS:
      return { loading: false, blogs: action.payload };
    case BLOG_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const singleBlogReducer = (state = { post: null }, action) => {
  switch (action.type) {
    case SINGLE_BLOG_REQUEST:
      return { loading: true, post: null };
    case SINGLE_BLOG_SUCCESS:
      return { loading: false, post: action.payload };
    case SINGLE_BLOG_FAIL:
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
      return { loading: false, error: action.payload };
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
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listFeedbacksReducer = (state = { feedbacks: [] }, action) => {
  switch (action.type) {
    case FEEDBACKS_REQUEST:
      return { loading: true, feedbacks: [] };
    case FEEDBACKS_SUCCESS:
      return { loading: false, feedbacks: action.payload };
    case FEEDBACKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listFormFeedbacksReducer = (state = { feedbacks: [] }, action) => {
  switch (action.type) {
    case FORM_FEEDBACKS_REQUEST:
      return { loading: true, feedbacks: [] };
    case FORM_FEEDBACKS_SUCCESS:
      return { loading: false, feedbacks: action.payload };
    case FORM_FEEDBACKS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const singleFeedbackReducer = (state = { feedback: [] }, action) => {
  switch (action.type) {
    case SINGLE_FEEDBACK_REQUEST:
      return { loading: true, feedback: [] };
    case SINGLE_FEEDBACK_SUCCESS:
      return { loading: false, feedback: action.payload };
    case SINGLE_FEEDBACK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminAdvisorsReducer = (state = { advisors: [] }, action) => {
  switch (action.type) {
    case ADMIN_ADVISORS_REQUEST:
      return { loading: true, advisors: [] };
    case ADMIN_ADVISORS_SUCCESS:
      return { loading: false, advisors: action.payload };
    case ADMIN_ADVISORS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminClientsReducer = (state = { clients: [] }, action) => {
  switch (action.type) {
    case ADMIN_CLIENTS_REQUEST:
      return { loading: true, clients: [] };
    case ADMIN_CLIENTS_SUCCESS:
      return { loading: false, clients: action.payload };
    case ADMIN_CLIENTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
