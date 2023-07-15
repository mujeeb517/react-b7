import axios from 'axios';

function instance() {
    return axios.create({
        baseURL: 'https://fsa-api-b6.onrender.com',
        headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
        }
    });
};

export default instance;

