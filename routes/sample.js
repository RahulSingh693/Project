import axios from 'axios';
import { frontendEnv } from '../../../environments/frontendEnv';

export async function getHello() {
    try {
        const res = await axios.get(frontendEnv.functionsUrl + '/sample' + '/hello');
        return res.data;
    }
    catch (error) {
        console.error(error);
    }
    return "error occurred";
}