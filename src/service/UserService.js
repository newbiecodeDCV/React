import axios from "./axios"
const fetchAllUser = (page) => {
    return axios.get(`/people/?page=${page}&recordPerPage=10`);
}


const loginAPI = (email,password) => {
    return axios.post("/auth/login",{email,password})
}

const fetchAllApartMents =(page) =>
{
    return axios.get(`/apartments?page=${page}&recordPerPage=10`)
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

const fetchAllCharity = () => {
    return axios.get('/charity/fee')
}
const postCharity = (name,startDate,endDate)  =>{
     return axios.post('/charity/fee',{
        'name':name,
        'startDate':startDate,
        'endDate':endDate
     })
    }

const getCharityPee = (page,feeID) =>{
    return axios.get(`/charity/fee/${feeID}/fund?page=${page}&recordPerPage=20`)
}
const fetchAllUser_2 = (page,name,apartmentId) => {
    return axios.get(`/people/?page=${page}&recordPerPage=4&name=${name}&apartmentId=${apartmentId}`);
}

const postCharityPee = (feeID,peopleId,amount) =>{
    return axios.post(`charity/fee/${feeID}/fund`,{
        'peopleId':peopleId,
        'amount':amount
    })
}
export {fetchAllUser,loginAPI,fetchAllApartMents,postApartMents,pathApartMents,fetchAllManager,postManager,fetchAllCharity,postCharity,getCharityPee,fetchAllUser_2,postCharityPee}
