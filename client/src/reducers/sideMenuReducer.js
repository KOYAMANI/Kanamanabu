import {
    SIDE_MENU_SHOW,
    SIDE_MENU_HIDE
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
