import axios from "axios";
import {
    QUIZ_LIST_FAIL,
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_SUCCESS,
    QUIZ_CATEGORY_LIST_FAIL,
    QUIZ_CATEGORY_LIST_REQUEST,
    QUIZ_CATEGORY_LIST_SUCCESS,
} from "../constants/quizConstants";


export const fetchCategories = () => async(dispatch, getState)=> {
  try {
    dispatch({
      type: QUIZ_CATEGORY_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/categories');

    dispatch({
      type: QUIZ_CATEGORY_LIST_SUCCESS,
      payload: data,
    });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: QUIZ_CATEGORY_LIST_FAIL,
      payload: message,
    });
  }
}

export const fetchQuiz = (category) => async (dispatch, getState) => {
    try {
      dispatch({
        type: QUIZ_LIST_REQUEST,
      });
  
    //   const {
    //     userLogin: { userInfo },
    //   } = getState();
  
    
    const { data } = await axios.get(`/api/questions/${category}`);
    
  
    dispatch({
        type: QUIZ_LIST_SUCCESS,
        payload: data,
    });
      
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: QUIZ_LIST_FAIL,
        payload: message,
      });
    }
  };