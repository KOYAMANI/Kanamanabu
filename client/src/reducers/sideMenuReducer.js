import {
    SIDE_MENU_UPDATE_REQUEST,
    SIDE_MENU_UPDATE_SUCCESS,
    SIDE_MENU_UPDATE_FAIL
} from "../constants/sideMenuConstants";

export const sideMenuUpdateReducer = (state={ currentSelection: 'はじめに' }, action) => {
    switch ( action.type ){
        case SIDE_MENU_UPDATE_REQUEST:
            return { loading: true }
        case SIDE_MENU_UPDATE_SUCCESS:
            return { loading: false, currentSelection: action.payload }
        case SIDE_MENU_UPDATE_FAIL:
            return { loading: false }
        default:
            return state;
    }
}
