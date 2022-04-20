import axios from 'axios';


// const baseURL = process.env.KMB_REACT_BASE_URL
const baseURL = "https://kanamanabu.herokuapp.com/api"
// local "http://localhost:8080/api"
// Heroku "https://kanamanabu.herokuapp.com/api"
// Docker "https://kmb-server:8080"

const api = axios.create({baseURL});

export const getAchievements = config => api.get(`/achievements`, config);
export const getChapters = title => api.get(`/chapters/${title}`);
export const getCategories = () => api.get(`/quizzes/categories/`);
export const getQuizList = (category, subcategory) => api.get(
    `/quizzes/${category}/${subcategory}`);
export const userLogin = (email, password, config) => api.post(
    '/users/login', { email, password }, config);
export const userRegister = (name, pic, email, password, config) => api.post(
    "/users", { name, pic, email, password }, config);
export const userUpdate = (user, config) => api.post(
    "/users/profile", user, config);

const apis = {
    getAchievements,
    getChapters,
    getCategories,
    getQuizList,
    userLogin,
    userRegister,
    userUpdate
}

export default apis