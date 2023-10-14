import axios from 'axios';
import {localIp} from "../constants";

const httpService = axios.create({
    baseURL: localIp,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default httpService;


