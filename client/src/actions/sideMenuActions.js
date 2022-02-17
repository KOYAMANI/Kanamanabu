import {
    SIDE_MENU_UPDATE_REQUEST,
    SIDE_MENU_UPDATE_SUCCESS,
    SIDE_MENU_UPDATE_FAIL
} from "../constants/sideMenuConstants";
import axios from "axios";


export const updateSideMenu = (selection) => async (dispatch) => {

    try {
        dispatch({
            type: SIDE_MENU_UPDATE_REQUEST,
        });

        // const { data } = await axios.get(`/api/selections/${selection}`);
        const data = selection.toString()

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