import {
    QUIZ_LIST_REQUEST,
    QUIZ_LIST_FAIL,
    QUIZ_LIST_SUCCESS,
    QUIZ_CATEGORY_LIST_REQUEST,
    QUIZ_CATEGORY_LIST_FAIL,
    QUIZ_CATEGORY_LIST_SUCCESS,
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
