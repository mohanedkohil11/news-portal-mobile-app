import axios from 'axios';

const APIKEY = 'a4dfa539cb3b4d179ee8012b708fbc1f';

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        'X-Api-Key': APIKEY,
    },
});

export default instance;
