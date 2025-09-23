import axios from 'axios';
import { LoginPayload, LoginRegisterResponse, RegisterPayload } from './types/authTypes';
import { Apiresponse } from './types/common';

const api = axios.create({
    baseURL:import.meta.env.VITE_BASE_API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

api.interceptors.request.use(
    (config)=>{
        const skipUrl = ['register-admin', 'login-admin']
        const token = "1234"
        if(!skipUrl.some((url)=>config?.url?.includes(url))){
            config.headers.Authorization=`bearer ${token}`
        }
        return config
    },
    (error)=>Promise.reject(error)
)

export const registerAdmin = async(payload:RegisterPayload) =>{
    const response = await api.post<Apiresponse<LoginRegisterResponse>>("/register-admin",payload);
    return  response.data;
}

export const loginAdmin = async(payload:LoginPayload) =>{
    const response = await api.post<Apiresponse<LoginRegisterResponse>>("/login-admin",payload);
    return response.data;
}


