import { apiDelete, apiGet, apiPost, apiPostImage, apiPut } from "./Api";
import Localstorage from "./storage/Localstorage";

const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_URL}`


export const routes = {
    BASE_PATH:baseURL,
    APIS:{
        ADMIN_LOGIN:async(data)=>{
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
        },
        Get_ALL_Program:async(data)=>{
            return await apiGet("/getprogram",routes.BASE_PATH,data)
        },
        GET_PROGRAM_BY_ID:async(id)=>{
            return await apiGet(`/getprogram/${id}`,routes.BASE_PATH)
        },
        DELETE_PROGRAM:async(id)=>{
            return await apiDelete(`/deleteprogram/${id}`,routes.BASE_PATH)
        },
        POST_PROGRAM:async(data)=>{
            return await apiPost('/createprogram',routes.BASE_PATH,data)
        },
        PUT_PROGRAM:async(id)=>{
            return await apiPut(`/updateprogram/${id}`,routes.BASE_PATH)
        },            
        ADD_GURU:async(data)=>{
            return await apiPost("/gurus",routes.BASE_PATH,data)
        },
        GET_GURU_BY_ID:async(id)=>{
            return await apiGet(`/gurus/${id}`,routes.BASE_PATH)
        },
        UPDATE_GURU:async(id,data)=>{
            return await apiPut(`/gurus/${id}`,routes.BASE_PATH,data)
        },
        ADD_PROGRAM:async(data)=>{
            return await apiPost("/createprogram",routes.BASE_PATH,data);
        },
        ADD_PILLAR:async(data)=>{
            return await apiPost("/pillar",routes.BASE_PATH,data)
        },
        GET_ALL_PILLARS:async()=>{
            return await apiGet("/pillar",routes.BASE_PATH)
        },
        DELETE_PILLAR:async(id)=>{
            return await apiDelete(`/pillar/${id}`,routes.BASE_PATH)
        },
        GET_PILLAR_BY_ID:async(id)=>{
            return await apiGet(`/pillar/${id}`,routes.BASE_PATH)
        },
        UPDATE_PILLAR:async(id,data)=>{
            return await apiPut(`/pillar/${id}`,routes.BASE_PATH,data)
        },
        ADD_VIHAR:async(data)=>{
            return await apiPost("/vihar",routes.BASE_PATH,data)
        },
        GET_ALL_VIHARS:async()=>{
            return await apiGet("/vihar",routes.BASE_PATH)
        },
        GET_VIHAR_BY_ID:async(id)=>{
            return await apiGet(`/vihar/${id}`,routes.BASE_PATH)
        },
        GET_ALL_ACTIVITIES_VIHARS:async()=>{
            return await apiGet("/vihar/activities",routes.BASE_PATH)
        },
        DELETE_VIHAR:async(id)=>{
            return await apiDelete(`/vihar/${id}`,routes.BASE_PATH)
        },
        UPDATE_VIHAR:async(id,data)=>{
            return await apiPut(`/vihar/${id}`,routes.BASE_PATH,data)
        },
        UPDATE_PROGRAM:async(id,data)=>{
            return await apiPut(`/updateprogram/${id}`,routes.BASE_PATH,data)
        },
    }


}



