import axios from 'axios';

const api = axios.create({
    baseURL:'http://ec2-18-230-69-117.sa-east-1.compute.amazonaws.com:8080'
})

export default api;
