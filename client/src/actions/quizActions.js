import axios from "axios";
import {
    QUIZ_LIST_FAIL,
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_SUCCESS,
} from "../constants/quizesConstants";

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