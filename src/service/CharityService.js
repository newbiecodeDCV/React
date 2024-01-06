import axios from './axios';
export const fetchAllCharity = () => {
    return axios.get('/charity/fee');
};
export const postCharity = (name, startDate, endDate) => {
    try {
        return axios.post('/charity/fee', {
            name: name,
            startDate: startDate,
            endDate: endDate,
        });
    } catch (error) {
        console.log('🚀 ~ postCharity ~ error:', error);
        throw error;
    }
};

export const getCharityFee = (page, feeID) => {
    try {
        return axios.get(
            `/charity/fee/${feeID}/fund?page=${page}&recordPerPage=20`
        );
    } catch (error) {
        console.log('🚀 ~ getCharityFee ~ error:', error);
        throw error;
    }
};

export const postCharityFee = (feeID, peopleId, amount) => {
    try {
        return axios.post(`charity/fee/${feeID}/fund`, {
            peopleId: peopleId,
            amount: amount,
        });
    } catch (error) {
        console.log('🚀 ~ postCharityFee ~ error:', error);
        throw error;
    }
};
