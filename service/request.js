import axios from "axios";

export const register = async(payload)=>{
    const api = import.meta.env.VITE_BACKEND_API;
    const regis = await axios.post(`${api}/api/auth/register`,payload);
    return regis.data
}