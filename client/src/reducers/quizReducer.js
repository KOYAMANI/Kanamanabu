import {
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_FAIL,
    QUIZ_LIST_SUCCESS,
    QUIZ_CATEGORY_LIST_REQUEST,
    QUIZ_CATEGORY_LIST_FAIL,
    QUIZ_CATEGORY_LIST_SUCCESS,
    QUIZ_INDEX_INCREMENT_REQUEST,
    QUIZ_INDEX_INCREMENT_SUCCESS,
    QUIZ_INDEX_INCREMENT_FAIL,
    QUIZ_ANSWER_SELECTED,
    QUIZ_ANSWER_DESELECTED,
} from "../constants/quizConstants";

export const quizCategoryListReducer = (state={ categories: [] }, action) => {
    switch ( action.type ){
        case QUIZ_CATEGORY_LIST_REQUEST:
            return { loading: true }
        case QUIZ_CATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload }
        case QUIZ_CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload}

        default:
            return state;
    }
}


export const quizListReducer = (state={ quizes: [] }, action) => {
    switch ( action.type ){
        case QUIZ_LIST_REQUEST:
            return { loading: true }
        case QUIZ_LIST_SUCCESS:
            return { loading: false, quizes: action.payload }
        case QUIZ_LIST_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state;
    }
}

export const quizIndexIncrementReducer = (state={ currentQuizIndex: 0 }, action) => {
    switch ( action.type ){
        case QUIZ_INDEX_INCREMENT_REQUEST:
            return { loading: true }
        case QUIZ_INDEX_INCREMENT_SUCCESS:
            return { loading: false, currentQuizIndex: action.payload }
        case QUIZ_INDEX_INCREMENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const quizAnswerSelectedReducer = (state={ answerSelected: false }, action) => {
    switch ( action.type ){
        case QUIZ_ANSWER_SELECTED:
            return { answerSelected: true }
        case QUIZ_ANSWER_DESELECTED:
            return { answerSelected: false } 
        default:
            return state;
    }
}