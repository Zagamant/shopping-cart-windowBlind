import axios from 'axios'
import { TokenService } from './storage.service'

const ApiService = {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    async get(resource) {
        return await axios.get(resource)
            .then(resp => {
                console.log(resp.data);
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });
    },

    async post(resource, data) {
        return await axios.post(resource, data)
            .then(resp => {
                console.log(resp.data);
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });
    },

    put(resource, data) {
        return axios.put(resource, data)
            .then(resp => {
                console.log(resp.data);
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });
    },

    delete(resource) {
        return axios.delete(resource)
            .then(resp => {
                console.log(resp.data);
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });
    },

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
        return axios(data)
    }
}

export default ApiService