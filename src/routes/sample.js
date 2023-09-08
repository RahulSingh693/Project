import axios from 'axios';
import { frontendEnv } from './frontendEnv';

export async function getHello() {
    try {
        const res = await axios.get(frontendEnv.functionsBaseUrl + '/sample' + '/hello');
        return res.data;
    }
    catch (error) {
        console.error(error);
    }
    return "error occurred";
}