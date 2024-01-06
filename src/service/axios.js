import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: 'http://localhost:3002/api/v1',
});
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
instance.interceptors.response.use(
    function (response) {
        return response.data ? response.data : { statusCode: response.status };
    },
    function (error) {
        if (Array.isArray(error.response?.data?.message))
            toast.error('Hãy điền đầy đủ và đúng định dạng thông tin');
        else toast.error(error.response?.data?.message);

        let res = {};
        if (error.response) {
            res.data = error.response.data;
            res.status = error.response.status;
            res.headers = error.response.headers;
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default instance;
