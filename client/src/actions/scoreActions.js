import { QUIZ_ANSWER_SELECTED } from "../constants/quizConstants";
import { 
    SCORE_UPDATE_FAIL, 
    SCORE_UPDATE_SUCCESS, 
    SCORE_UPDATE_REQUEST 
} from "../constants/scoreConstants";

export const updateScore = (currentScore, answer, correct) => async (dispatch) => {
    dispatch({
        type: SCORE_UPDATE_REQUEST,
      }); 
    dispatch({
        type: QUIZ_ANSWER_SELECTED,
    }); 
    if(answer === correct){                      
        dispatch({
            type: SCORE_UPDATE_SUCCESS,
            payload: currentScore + 1,
        }); 
    } else {
        dispatch({
            type: SCORE_UPDATE_FAIL,
            payload: currentScore
        }); 
    }
    
}