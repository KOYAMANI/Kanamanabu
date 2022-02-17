import {
    SIDE_MENU_SHOW,
    SIDE_MENU_HIDE
} from "../constants/sideMenuConstants";

export const openSideMenu = () => async (dispatch) => {
    console.log('open')
    dispatch({
        type: SIDE_MENU_SHOW,
    });
}

export const closeSideMenu = () => async (dispatch) => {
    dispatch({
        type: SIDE_MENU_HIDE,
    });
}