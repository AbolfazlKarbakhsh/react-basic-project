import axios from "axios"

const Base_url = "https://api.tizhoo.com"
const Base_url_Api = "https://api.tizhoo.com/api"

export const httpService = axios.create({
    baseURL: Base_url
})

export const httpsInterceptedService = axios.create({
    baseURL: Base_url_Api
})

httpsInterceptedService.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('t_a#@$sdf_k')
        if (token) {
            config.headers = {
                Authorization: `Bearer ${token}`
            }
        }
        return config
    }, (error) => Promise.reject(error)
)

httpsInterceptedService.interceptors.response.use(
    (res) => res ,
    async (error) => {
        if(error.response.status === 401) {
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)
 
