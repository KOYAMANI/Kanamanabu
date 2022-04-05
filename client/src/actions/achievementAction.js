import api from "../api";
import {
    ACHIEVEMENT_LIST_FAIL,
    ACHIEVEMENT_LIST_REQUEST,
    ACHIEVEMENT_LIST_SUCCESS,
} from "../constants/achievementConstants";


export const listAchievements = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ACHIEVEMENT_LIST_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await api.getAchievements(config);

        dispatch({
            type: ACHIEVEMENT_LIST_SUCCESS,
            payload: data,
        });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: ACHIEVEMENT_LIST_FAIL,
            payload: message,
        });
    }
};