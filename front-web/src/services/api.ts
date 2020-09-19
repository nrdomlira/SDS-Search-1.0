import axios from 'axios';
const api = axios.create({
    baseURL: 'https://sds1-domingos.herokuapp.com/',
});

export default api;