import axios from 'axios';

const api = axios.create({
    baseURL:'http://ec2-54-233-224-134.sa-east-1.compute.amazonaws.com:8080'
})

export default api;
