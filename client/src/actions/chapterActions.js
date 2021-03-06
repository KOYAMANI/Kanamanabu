import {
    CHAPTER_UPDATE_REQUEST,
    CHAPTER_UPDATE_SUCCESS,
    CHAPTER_UPDATE_FAIL
} from "../constants/chapterConstants";
import api from "../api";


export const updateChapter = (title) => async(dispatch)=> {
    try {
        dispatch({
            type: CHAPTER_UPDATE_REQUEST,
        });

        const { data } = await api.getChapters(title);

        dispatch({
            type: CHAPTER_UPDATE_SUCCESS,
            payload: data,
        });

    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: CHAPTER_UPDATE_FAIL,
            payload: message,
        });
    }
}