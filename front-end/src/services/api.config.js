import axios from 'axios';
import { TokenService } from './storage.service';

class ApiService {
    constructor(baseUrl) {
        axios.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${TokenService.getToken()}`;
        axios.defaults.baseURL =
            process.env.REACT_APP_SERVER_URL + (baseUrl || '');
    }

    setHeader() {
        axios.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${TokenService.getToken()}`;
    }

    removeHeader() {
        axios.defaults.headers.common = {};
    }

    get(resource) {
        return axios.get(resource);
    }

    post(resource, data) {
        return axios.post(resource, data);
    }

    put(resource, data) {
        return axios.put(resource, data);
    }

    delete(resource) {
        return axios.delete(resource);
    }

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
     **/
    customRequest(data) {
        return axios(data);
    }
}

export default ApiService;
