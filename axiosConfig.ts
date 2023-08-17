import axios from 'axios'
const baseUrl = import.meta.env.VITE_SERVER

export const axiosBasic = axios.create({
    baseURL: baseUrl,
})