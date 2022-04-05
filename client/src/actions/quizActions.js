import api from "../api";
import {
  QUIZ_LIST_FAIL,
  QUIZ_LIST_REQUEST,
  QUIZ_LIST_SUCCESS,
  QUIZ_CATEGORY_LIST_FAIL,
  QUIZ_CATEGORY_LIST_REQUEST,
  QUIZ_CATEGORY_LIST_SUCCESS,
  QUIZ_ANSWER_DESELECTED,
  QUIZ_INDEX_INCREMENT_FAIL,
  QUIZ_INDEX_INCREMENT_REQUEST,
  QUIZ_INDEX_INCREMENT_SUCCESS
} from "../constants/quizConstants";
import {
  SCORE_SHOW
} from "../constants/scoreConstants";


export const fetchCategories = () => async(dispatch)=> {
  try {
    dispatch({
      type: QUIZ_CATEGORY_LIST_REQUEST,
    });

    const { data } = await api.getCategories();

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

export const fetchQuizList = (category, subcategory) => async (dispatch) => {
  try {
    dispatch({
      type: QUIZ_LIST_REQUEST,
    });

    const { data } = await api.getQuizList(category, subcategory);

    // randomize quiz list before storing it to the state
    const randomize = (array) => {
      let currentIdx = array.length,  randomIdx;
      while (currentIdx !== 0) {
        randomIdx = Math.floor(Math.random() * currentIdx);
        currentIdx--;
        [array[currentIdx], array[randomIdx]] = [
          array[randomIdx], array[currentIdx]];
      }
      return array;
    }

    dispatch({
      type: QUIZ_LIST_SUCCESS,
      payload: randomize(data),
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
}

export const quizIndexIncrement = (currentQuizIndex, quizListLength, ) => async (dispatch) => {

  dispatch({
    type: QUIZ_INDEX_INCREMENT_REQUEST,
  });

  const nextQuizIndex = currentQuizIndex + 1;

  if(nextQuizIndex < quizListLength){
    dispatch({
      type: QUIZ_INDEX_INCREMENT_SUCCESS,
      payload: nextQuizIndex
    });
    dispatch({
      type: QUIZ_ANSWER_DESELECTED,
    });
  } else {
    dispatch({
      type: QUIZ_INDEX_INCREMENT_FAIL,
    });
    dispatch({
      type: SCORE_SHOW,
    });
  }

}
