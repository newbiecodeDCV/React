import axios from "./axios"
const fetchAllUser = (page) => {
    return axios.get(`/people/?page=${page}&recordPerPage=4`);
}


const loginAPI = (email,password) => {
    return axios.post("/auth/login",{email,password})
}

const fetchAllApartMents =(page) =>
{
    return axios.get(`/apartments?page=${page}&recordPerPage=4`)
}

const postApartMents = (area,apartmentId,type) =>{
    return axios.post('/apartments',{
        'area' :area,
        'apartmentId':apartmentId,
        'type' :type
    })
}

const pathApartMents = (apartmentId,name,nation,dateOfBirth,citizenId,phoneNumber,permanentAddress) => {
    return axios.patch(`/apartments/${apartmentId}/owner`,{
        'name' : name,
        'nation' : nation,
        'dateOfBirth' :dateOfBirth,
        'citizenId' : citizenId,
        'phoneNumber':phoneNumber,
        'permanentAddress':permanentAddress
})
}


const fetchAllManager = () => {
    return axios.get('/users')
}

const postManager = (email,peopleId,role) =>{
    return axios.post('/users',{
        'email':email,
        'peopleId':peopleId,
        'role':role
    })
}
export {fetchAllUser,loginAPI,fetchAllApartMents,postApartMents,pathApartMents,fetchAllManager,postManager}