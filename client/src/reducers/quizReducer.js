import {
    
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_FAIL,
    QUIZ_LIST_SUCCESS,
} from "../constants/quizConstants";


export const quizListReducer = (state={ quizes: [] }, action) => {
    switch ( action.type ){
        case QUIZ_LIST_REQUEST:
            return { loading: true }
        case QUIZ_LIST_FAIL:
            return { loading: false, quizes: action.payload }
        case QUIZ_LIST_SUCCESS:
            return { loading: false, error: action.payload}

        default:
            return state;
    }
}
