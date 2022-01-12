import {
    SCORE_SHOW,
    SCORE_HIDE,
    SCORE_UPDATE_FAIL,
    SCORE_UPDATE_REQUEST,
    SCORE_UPDATE_SUCCESS
} from "../constants/scoreConstants";

export const scoreShowReducer = (state={ showScore: false }, action) => {
    switch ( action.type ){
        case SCORE_SHOW:
            return { showScore: true }
        case SCORE_HIDE:
            return { showScore: false}
        default:
            return state;
    }
}

export const scoreUpdateReducer = (state={ score: 0 }, action) => {
    switch ( action.type ){
        case SCORE_UPDATE_REQUEST:
            return { loading: true }
        case SCORE_UPDATE_SUCCESS:
            return { loading: false, score: action.payload }
        case SCORE_UPDATE_FAIL:
            return { loading: false, score: action.payload }
        default:
            return state;
    }
}