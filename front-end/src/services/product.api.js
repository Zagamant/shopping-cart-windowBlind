import ApiService from './api.config';

class ProductApi extends ApiService {
    constructor() {
        super('/api/v1/windowBlinds');
    }

    async get() {
        const result = await super.get('');
        return result.data;
    }

    async post(data) {
        const result = await super.post('', data);
        return result.data;
    }

    async put(resource, data) {
        const result = await super.put('', data);
        return result.data;
    }

    async delete(resource) {
        const result = await super.delete('');
        return result.data;
    }

    async customRequest(data) {
        const result = await super.customRequest(data);
        return result.data;
    }
}

export default ProductApi;
