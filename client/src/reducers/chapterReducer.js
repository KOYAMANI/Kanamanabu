import {
    CHAPTER_UPDATE_REQUEST,
    CHAPTER_UPDATE_SUCCESS,
    CHAPTER_UPDATE_FAIL
} from "../constants/chapterConstants";

export const chapterUpdateReducer = (state={
    currentChapter: [
        {title: "はじめに"}
    ] }, action) => {
    switch ( action.type ){
        case CHAPTER_UPDATE_REQUEST:
            return { loading: true }
        case CHAPTER_UPDATE_SUCCESS:
            return { loading: false, currentChapter: action.payload }
        case CHAPTER_UPDATE_FAIL:
            return { loading: false }
        default:
            return state;
    }
}
