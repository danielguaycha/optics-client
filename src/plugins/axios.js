import Vue from "vue";
import axios from "axios";
import config from "../config";

axios.defaults.baseURL = config.urlApi;

axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');

    if (token !== null) config.headers.Authorization = `${token}`;
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Accept'] = '*/*';
axios.defaults.headers.common['Content-Type'] = 'application/json';


axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    const { response: { status } } = error;
    if (status === 401) {
        if (Vue.auth.getToken() !== null) {
            localStorage.removeItem('token');
            window.location.reload();
        }
    }
    return Promise.reject(error);
});

Vue.prototype.$http = axios;
