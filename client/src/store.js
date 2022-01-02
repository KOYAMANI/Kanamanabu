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
    notesUpdateReducer
 } from './reducers/notesReducer';
import { 
    quizListReducer
 } from './reducers/quizReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    noteList: notesListReducer,
    noteCreate: notesCreateReducer,
    noteUpdate: notesUpdateReducer,
    noteDelete: noteDeleteReducer,
    userUpdate: userUpdateReducer,
    quizList: quizListReducer,
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