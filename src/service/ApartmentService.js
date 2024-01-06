import axios from './axios';

export const fetchAllApartMents = (page) => {
    try {
        return axios.get(`/apartments?page=${page}&recordPerPage=10`);
    } catch (error) {
        console.log('🚀 ~ fetchAllApartMents ~ error:', error);
        throw error;
    }
};

export const postApartMents = (area, apartmentId, type) => {
    try {
        return axios.post('/apartments', {
            area: area,
            apartmentId: apartmentId,
            type: type,
        });
    } catch (error) {
        console.log('🚀 ~ postApartMents ~ error:', error);
        throw error;
    }
};

export const patchApartMents = (
    apartmentId,
    name,
    nation,
    dateOfBirth,
    citizenId,
    phoneNumber,
    permanentAddress
) => {
    try {
        return axios.patch(`/apartments/${apartmentId}/owner`, {
            name: name,
            nation: nation,
            dateOfBirth: dateOfBirth,
            citizenId: citizenId,
            phoneNumber: phoneNumber,
            permanentAddress: permanentAddress,
        });
    } catch (error) {
        console.log('🚀 ~ error:', error);
        throw error;
    }
};
