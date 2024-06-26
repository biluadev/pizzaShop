import { env } from '@/env';
import axios from 'axios';

export const api = axios.create({
    baseURL: env.VITE_API_URL,
    //Para simular deley na página
    withCredentials: true
})

if(env.VITE_ENABLE_API_DELEY) {
    api.interceptors.request.use(async (config) => {
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000))

        return config
    })
}