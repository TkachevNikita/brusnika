import axios from "axios"

export const API_URL = 'http://localhost'

const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;