import {
    SCORE_SHOW_FAIL,
    SCORE_SHOW_REQUEST,
    SCORE_SHOW_SUCCESS,
    SCORE_UPDATE_FAIL,
    SCORE_UPDATE_REQUEST,
    SCORE_UPDATE_SUCCESS
} from "../constants/scoreConstants";


export const scoreShowReducer = (state={ score: []}, action) => {
    switch ( action.type ){
        case SCORE_SHOW_REQUEST:
            return { loading: true }
        case SCORE_SHOW_FAIL:
            return { loading: false, score: action.payload }
        case SCORE_SHOW_SUCCESS:
            return { loading: false, error: action.payload}

        default:
            return state;
    }
}

export const scoreUpdateReducer = (state={}, action) => {
    switch ( action.type ){
        case SCORE_UPDATE_REQUEST:
            return { loading: true }
        case SCORE_UPDATE_SUCCESS:
            return { loading: false, score: action.payload }
        case SCORE_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}