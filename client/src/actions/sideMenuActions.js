import {
    SIDE_MENU_SHOW,
    SIDE_MENU_HIDE,
    SIDE_MENU_UPDATE_REQUEST,
    SIDE_MENU_UPDATE_SUCCESS,
    SIDE_MENU_UPDATE_FAIL
} from "../constants/sideMenuConstants";
import axios from "axios";

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

export const updateSideMenu = (selection) => async (dispatch) => {

    try {
        dispatch({
            type: SIDE_MENU_UPDATE_REQUEST,
        });

        // const { data } = await axios.get(`/api/selections/${selection}`);
        const data = selection.toString()
        console.log(data)

        dispatch({
            type: SIDE_MENU_UPDATE_SUCCESS,
            payload: data,
        });


    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: SIDE_MENU_UPDATE_FAIL,
            payload: message,
        });
    }
}