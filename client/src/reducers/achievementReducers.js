import {
    ACHIEVEMENT_LIST_FAIL,
    ACHIEVEMENT_LIST_REQUEST,
    ACHIEVEMENT_LIST_SUCCESS,
} from "../constants/achievementConstants";


export const achievementListReducer = (state={ achievements: [] }, action) => {
    switch ( action.type ){
        case ACHIEVEMENT_LIST_REQUEST:
            return { loading: true }
        case ACHIEVEMENT_LIST_SUCCESS:
            return { loading: false, achievements: action.payload }
        case ACHIEVEMENT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}