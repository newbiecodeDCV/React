import axios from "./axios"
const fetchAllUser = () => {
    return axios.get("/?page=1&recordPerPage=3");
}


const loginAPI = (email,password) => {
    return axios.post("/auth/login",{email,password})
}

export {fetchAllUser,loginAPI}