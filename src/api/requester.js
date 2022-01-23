import axios from 'axios';

const APIKEY = '62f5da049d9b4a41b249006231590d0c';

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        'X-Api-Key': APIKEY,
    },
});

export default instance;
