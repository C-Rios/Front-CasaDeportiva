import axios from "axios";
const url = "http://127.0.0.1:8080/api/v1/product/";
export function getProducts(){
    return axios.get(url+"all")
    .then((response)=>{
        return response.data;
    })
    .catch(error => console.error("Error: $(error)"))
}

export async function  getAllCategories(){
    return axios.get(url+"category/all")
    .then((response)=>{
        return response;
    })
    .catch(error => console.error("Error: $(error)"))
}
