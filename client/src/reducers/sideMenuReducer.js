import {
    SIDE_MENU_SHOW,
    SIDE_MENU_HIDE,
    SIDE_MENU_UPDATE_REQUEST,
    SIDE_MENU_UPDATE_SUCCESS,
    SIDE_MENU_UPDATE_FAIL
} from "../constants/sideMenuConstants";

export const sideMenuShowReducer = (state={ showSideMenu: false }, action) => {
    switch ( action.type ){
        case SIDE_MENU_SHOW:
            return { showSideMenu: true }
        case SIDE_MENU_HIDE:
            return { showSideMenu: false}
        default:
            return state;
    }
}

export const sideMenuUpdateReducer = (state={ selections: [] }, action) => {
    switch ( action.type ){
        case SIDE_MENU_UPDATE_REQUEST:
            return { loading: true }
        case SIDE_MENU_UPDATE_SUCCESS:
            return { loading: false, selections: action.payload }
        case SIDE_MENU_UPDATE_FAIL:
            return { loading: false }
        default:
            return state;
    }
}
