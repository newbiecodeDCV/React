import axios from './axios';

export const loginAPI = (email, password) => {
    try {
        return axios.post('/auth/login', { email, password });
    } catch (error) {
        console.log('🚀 ~ loginAPI ~ error:', error);
        throw error;
    }
};

export const fetchAllAdmin = () => {
    try {
        return axios.get('/users');
    } catch (error) {
        console.log('🚀 ~ fetchAllAdmin ~ error:', error);
        throw error;
    }
};

export const fetchAllAdminForGuest = () => {
    try {
        return axios.get('/guest/admin');
    } catch (error) {
        console.log('🚀 ~ fetchAllAdminForGuest ~ error:', error);
        throw error;
    }
};

export const addAdmin = (id, email) => {
    try {
        return axios.post('/users', {
            peopleId: id,
            email,
            role: 'Thành viên ban quản trị',
        });
    } catch (error) {
        console.log('🚀 ~ addAdmin ~ error:', error);
        throw error;
    }
};
export const patchPassWord = (password, newpassword) => {
    try {
        return axios.patch('/users/password', {
            password: password,
            newPassword: newpassword,
        });
    } catch (error) {
        console.log('🚀 ~ patchPassWord ~ error:', error);
        throw error;
    }
};
export const deleteUser = async (id) => {
    try {
        return await axios.delete(`/users/${id}`);
    } catch (error) {
        console.log('🚀 ~ deleteUser ~ error:', error);
        throw error;
    }
};
export const getProfile = async () => {
    try {
        return await axios.get(`/users/profile`);
    } catch (error) {
        console.log('🚀 ~ getProfile ~ error:', error);
        throw error;
    }
};
