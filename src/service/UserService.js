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

const postPeeDV = (name,unitPrice) =>{
    return axios.post('/fee',{
        'name':name,
        'unitPrice':unitPrice
    })
}
const getPee = () =>{
    return axios.get('/fee')
}
const deletePee = (id) =>{
    return axios.delete(`/fee/${id}`)
}
const patchPee = (id,unitPrice) =>{
    return axios.patch(`/fee/${id}`,{
        'unitPrice':unitPrice
    })
}
const getPeeDept = (page) =>{
    return axios.get(`/fee/bills/dept?page=${page}&recordPerPage=20`)
}
const getPeeBill = (apartmentId,month,year) =>{
    return axios.get(`/fee/bills/${apartmentId}?month=${month}&year=${year}`)
}
const patchBill = (apartmentId,month,year,payMoney,payername) =>{
    return axios.patch(`/fee/bills/${apartmentId}`,{
        'month':month,
        'year':year,
        'payMoney':payMoney,
        'payerName':payername
    })
}
const getBill = (page,month,year) =>{
    return axios.get(`/fee/bills?month=${month}&year=${year}&page=${page}&recordPerPage=20`)
}

const getGust = (apartmentId,citizenId) =>{
    return axios.get(`http://localhost:3000/api/v1/guest/bill?apartmentId=${apartmentId}&citizenId=${citizenId}`)

}
export {fetchAllUser,loginAPI,fetchAllApartMents,postApartMents,pathApartMents,fetchAllManager,postManager,fetchAllCharity,postCharity,getCharityPee,fetchAllUser_2,postCharityPee,postPeeDV,getPee,deletePee,patchPee,getPeeDept,getPeeBill,patchBill,getBill,getGust}
