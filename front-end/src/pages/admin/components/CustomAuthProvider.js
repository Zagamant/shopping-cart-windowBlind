import UserApi from '../../../services/user.api';

const CustomAuthProvider = {
    login: async ({ username, password }) => {
        const API = new UserApi();
        const item = await API.equals({ username, password });
        if (item === true) {
            localStorage.setItem('login', 'login');
            localStorage.setItem('user', username);
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    },
    logout: () => {
        localStorage.removeItem('user');
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => {
        return localStorage.getItem('user')
            ? Promise.resolve()
            : Promise.reject();
    },
    getPermissions: () => {
        return Promise.reject('Unknown method');
    },
    getIdentity: () => {
        return Promise.resolve();
    },
};

export default CustomAuthProvider;
