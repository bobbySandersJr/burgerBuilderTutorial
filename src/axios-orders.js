import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactmyburger-20e46.firebaseio.com/'
});

export default instance;