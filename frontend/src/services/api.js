import axios from 'axios';

const api = axios.create({
    baseURL:'ec2-54-233-224-134.sa-east-1.compute.amazonaws.com'
})

export default api;
