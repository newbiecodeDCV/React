import axios from './axios';
export const registerResidence = async (form) => {
    try {
        return await axios.post('/people', form);
    } catch (error) {
        console.log(error);
    }
};
