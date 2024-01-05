import axios from './axios';
export const registerResidence = async (form) => {
    try {
        return await axios.post('/people', form);
    } catch (error) {
        console.log(error);
    }
};
export const deletePeople = async (id) => {
    try {
        return await axios.delete(`/people/${id}`);
    } catch (error) {
        console.log(error);
    }
};
export const getHousehold = async (apartmentId) => {
    try {
        if (!apartmentId) return [];
        return await axios.get(`/people/household/${apartmentId}`);
    } catch (error) {
        console.log('🚀 ~ getHousehold ~ error:', error);
    }
};
export const deleteHousehold = async (apartmentId) => {
    try {
        return await axios.delete(`people/household/${apartmentId}`);
    } catch (error) {
        console.log('🚀 ~ deleteHousehold ~ error:', error);
    }
};
