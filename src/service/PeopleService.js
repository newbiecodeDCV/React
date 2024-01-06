import axios from './axios';
export const registerResidence = async (form) => {
    try {
        return await axios.post('/people', form);
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const deletePeople = async (id) => {
    try {
        return await axios.delete(`/people/${id}`);
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getHousehold = async (apartmentId) => {
    try {
        if (!apartmentId) return [];
        return await axios.get(`/people/household/${apartmentId}`);
    } catch (error) {
        console.log('🚀 ~ getHousehold ~ error:', error);
        throw error;
    }
};
export const deleteHousehold = async (apartmentId) => {
    try {
        return await axios.delete(`people/household/${apartmentId}`);
    } catch (error) {
        console.log('🚀 ~ deleteHousehold ~ error:', error);
        throw error;
    }
};
export const registerAbsent = async (id, data) => {
    try {
        return await axios.post(`/people/${id}/registerAbsent`, data);
    } catch (error) {
        console.log('🚀 ~ registerAbsent ~ error:', error);
        throw error;
    }
};
export const getAbsent = async (page) => {
    try {
        return await axios.get(
            `people/absentList?page=${page}&recordPerPage=10`
        );
    } catch (error) {
        console.log('🚀 ~ getAbsent ~ error:', error);
        throw error;
    }
};
export const endAbsent = async (peopleId) => {
    try {
        return await axios.patch(`people/${peopleId}/rollbackStatus`);
    } catch (error) {
        console.log('🚀 ~ endAbsent ~ error:', error);
        throw error;
    }
};
export const patchPeople = async (peopleId, form) => {
    try {
        return await axios.patch(`people/${peopleId}`, form);
    } catch (error) {
        console.log('🚀 ~ patchPeople ~ error:', error);
        throw error;
    }
};
export const fetchAllPeople = (page, name) => {
    try {
        if (name)
            return axios.get(
                `/people/?page=${page}&recordPerPage=10&name=${name}`
            );
        else return axios.get(`/people/?page=${page}&recordPerPage=10`);
    } catch (error) {
        console.log('🚀 ~ fetchAllPeople ~ error:', error);
        throw error;
    }
};
export const fetchAllPeople_2 = (page, name, apartmentId) => {
    try {
        return axios.get(
            `/people/?page=${page}&recordPerPage=4&name=${name}&apartmentId=${apartmentId}`
        );
    } catch (error) {
        console.log('🚀 ~ error:', error);
        throw error;

    }
};
