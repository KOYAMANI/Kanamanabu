import axios from 'axios';

// Docker
// const baseURL = process.env.KMB_REACT_BASE_URL

// Heroku
const baseURL = "http://localhost:8080/api"
const api = axios.create({baseURL});

export const getAchievements = config => axios.get(`/achievements`, config);
export const getChapters = title => axios.get(`/chapters/${title}`);
export const getCategories = () => axios.get(`/quizzes/categories/`);
export const getQuizList = (category, subcategory) => axios.get(
    `/quizzes/${category}/${subcategory}`);
export const userLogin = (email, password, config) => axios.post(
    '/users/login', { email, password }, config);
export const userRegister = (name, pic, email, password, config) => axios.post(
    "/users", { name, pic, email, password }, config);
export const userUpdate = (user, config) => axios.post(
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