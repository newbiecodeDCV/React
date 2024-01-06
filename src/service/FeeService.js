import axios from './axios';
export const postFeeDV = (name, unitPrice) => {
    return axios.post('/fee', {
        name: name,
        unitPrice: unitPrice,
    });
};
export const getFee = () => {
    return axios.get('/fee');
};
export const deleteFee = (id) => {
    return axios.delete(`/fee/${id}`);
};
export const patchFee = (id, unitPrice) => {
    return axios.patch(`/fee/${id}`, {
        unitPrice: unitPrice,
    });
};
export const getFeeDept = (page) => {
    try {
        return axios.get(`/fee/bills/dept?page=${page}&recordPerPage=10`);
    } catch (error) {
        console.log('🚀 ~ getFeeDept ~ error:', error);
        throw error;
    }
};
export const getFeeBill = (apartmentId, month, year) => {
    try {
        return axios.get(
            `/fee/bills/${apartmentId}?month=${month}&year=${year}`
        );
    } catch (error) {
        console.log('🚀 ~ getFeeBill ~ error:', error);
        throw error;
    }
};
export const patchBill = (apartmentId, month, year, payMoney, payername) => {
    try {
        return axios.patch(`/fee/bills/${apartmentId}`, {
            month: month,
            year: year,
            payMoney: payMoney,
            payerName: payername,
        });
    } catch (error) {
        console.log('🚀 ~ patchBill ~ error:', error);
        throw error;
    }
};
export const getBill = (page, month, year) => {
    try {
        return axios.get(
            `/fee/bills?month=${month}&year=${year}&page=${page}&recordPerPage=10`
        );
    } catch (error) {
        console.log('🚀 ~ getBill ~ error:', error);
        throw error;
    }
};
export const getGuestBill = (apartmentId, citizenId) => {
    try {
        return axios.get(
            `/guest/bill?apartmentId=${apartmentId}&citizenId=${citizenId}`
        );
    } catch (error) {
        console.log('🚀 ~ getGuestBill ~ error:', error);
        throw error;
    }
};
