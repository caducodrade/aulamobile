import axios from 'axios';

const api = axios.create({
    baseURl: 'http://192.168.100.70:19000',
    headers:{
        'Accept' : 'application/json',
        'Content-type' : 'application/json'
    }
});
