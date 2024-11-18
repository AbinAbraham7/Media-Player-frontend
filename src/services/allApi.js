import { serverURL } from "./Serverurl"
import { commonApi } from "./commonAPI"


export const AddVideoApi=async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/videos`,reqBody)

}
export const getVideosApi =async()=>{
    return await commonApi('GET',`${serverURL}/videos`)
}

export const addVideoHistoryApi=async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/history`,reqBody)
}

//get videos from history

export const getAllVideoHistoryApi=async()=>{
    return await commonApi('GET',`${serverURL}/history`)
}

//api to delete a video from all videos

export const deleteVideoApi=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/videos/${id}`)
}

//api to delete a video from history
export const deleteHistoryVideoApi=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/history/${id}`)
}
//api to add category
export const addcategoryApi=async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/category`,reqBody)
}
//api to get category
export const getAllCategoryApi=async()=>{
    return await commonApi('GET',`${serverURL}/category`)
}
//api to delete category
export const deleteCategoryApi=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/category/${id}`)
}
//api to add video to category

export const addVideoToCategoryApi=async(id,reqBody)=>{
    return await commonApi('PUT',`${serverURL}/category/${id}`,reqBody)
}