import { apiGet, apiPost, apiPut } from "./Api";
import Localstorage from "./storage/Localstorage";

const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}`


export const routes = {
    BASE_PATH:baseURL,
    APIS:{
        ADMIN_LOGIN:async(data)=>{
            console.log("data",baseURL)
            return await apiPost("/admin/adminLogin",routes.BASE_PATH,data)
        },
        GENERATE_RESET_PASSWORD_LINK:async(data)=>{
            return await apiPost("/admin/generateResetPasswordLink",routes.BASE_PATH,data)
        },
        RESET_PASSWORD:async(data)=>{
            return await apiPost("/admin/resetPassword",routes.BASE_PATH,data)
        }
    }


}

