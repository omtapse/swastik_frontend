import { apiDelete, apiGet, apiPost, apiPostImage, apiPut } from "./Api";
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
        },
        GET_ALL_GURUS:async()=>{
            return await apiGet("/gurus",routes.BASE_PATH)
        },
        DELETE_GURU:async(id)=>{
            return await apiDelete(`/gurus/${id}`,routes.BASE_PATH)
        },
        UPLOAD_IMAGE:async(data)=>{
            return await apiPostImage("/uploadImageToS3",routes.BASE_PATH,data)
        }
    }


}

