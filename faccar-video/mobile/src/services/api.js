import axios from 'axios';

const api = axios.create({
    baseURL : 'http://192.168.100.88:3000',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'acess-key': 'c31a230f-c2d8-43c5-affd-783e7209e4ae',
    },
});
export default api;    