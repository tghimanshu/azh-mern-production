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
import http from "../../utils/http";

// * CATEGORIES

export const listCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORIES_REQUEST,
    });
    const { data } = await http.get("/category");
    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// * ADVISORS

export const listAdvisorsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORIES_ADV_REQUEST,
    });
    const { data } = await http.get("/advisor");
    dispatch({
      type: CATEGORIES_ADV_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_ADV_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateAdvisorsAction = (body) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ADVISOR_REQUEST,
    });
    const { data } = await http.put(`/advisor/${body._id}`, body);
    dispatch({
      type: UPDATE_ADVISOR_SUCCESS,
      payload: data,
    });
    dispatch(listAdvisorsAction());
  } catch (error) {
    dispatch({
      type: UPDATE_ADVISOR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// * PAGES

export const getSinglePageAction = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: PAGE_REQUEST,
    });
    const { data } = await http.get("/page/" + slug);
    dispatch({
      type: PAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// * USER

export const getUserAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REQUEST,
    });
    const { data } = await http.get("/client/" + id);
    dispatch({
      type: USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// * E LEARNING

export const listELearningAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ELEARNING_REQUEST,
    });
    const { data } = await http.get("/elearning");
    dispatch({
      type: ELEARNING_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ELEARNING_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// * ADMIN

export const adminCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_CATEGORIES_REQUEST,
    });
    const { data } = await http.get("/category");
    dispatch({
      type: ADMIN_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_CATEGORIES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminAdvisorsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_ADVISORS_REQUEST,
    });
    const { data } = await http.get("/admin/advisors");
    dispatch({
      type: ADMIN_ADVISORS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_ADVISORS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminClientsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_CLIENTS_REQUEST,
    });
    const { data } = await http.get("/admin/clients");
    dispatch({
      type: ADMIN_CLIENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_CLIENTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listFeedbacksAction = () => async (dispatch) => {
  try {
    dispatch({
      type: FEEDBACKS_REQUEST,
    });
    const { data } = await http.get("/feedback/feedbacks");
    dispatch({
      type: FEEDBACKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FEEDBACKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listFormFeedbacksAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: FORM_FEEDBACKS_REQUEST,
    });
    const { data } = await http.get(`/admin/feedbacks/${id}`);
    dispatch({
      type: FORM_FEEDBACKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_FEEDBACKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const singleFeedbackAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_FEEDBACK_REQUEST,
    });
    const { data } = await http.get(`/feedback/single/${id}`);
    dispatch({
      type: SINGLE_FEEDBACK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_FEEDBACK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
