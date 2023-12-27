import axios from "./axios"
const fetchAllUser = (page) => {
    return axios.get(`/people/?page=${page}&recordPerPage=4`);
}


const loginAPI = (email,password) => {
    return axios.post("/auth/login",{email,password})
}

export {fetchAllUser,loginAPI}