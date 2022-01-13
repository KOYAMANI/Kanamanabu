import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
    userLoginReducer,
    userRegisterReducer,
    userUpdateReducer,
 } from './reducers/userReducers';
import { 
    noteDeleteReducer,
    notesCreateReducer,
    notesListReducer, 
    notesUpdateReducer,
 } from './reducers/notesReducer';
import { 
    quizListReducer,
    quizCategoryListReducer,
    quizAnswerSelectedReducer,
    quizIndexIncrementReducer
 } from './reducers/quizReducer';
import {
    achievementListReducer
} from "./reducers/achievementReducers";
import { scoreShowReducer, scoreUpdateReducer } from './reducers/scoreReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    noteList: notesListReducer,
    noteCreate: notesCreateReducer,
    noteUpdate: notesUpdateReducer,
    noteDelete: noteDeleteReducer,
    userUpdate: userUpdateReducer,
    quizList: quizListReducer,
    categoryList: quizCategoryListReducer,
    isAnswerSelected: quizAnswerSelectedReducer,
    currentQuiz: quizIndexIncrementReducer,
    currentScore: scoreUpdateReducer, 
    isShowScore: scoreShowReducer,
    achievementList: achievementListReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ?JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    )
);

export default store;