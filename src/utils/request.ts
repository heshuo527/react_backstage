import Axios from 'axios'
// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { serverUrl, getToken } from './tools'

const instance = Axios.create({
    baseURL: serverUrl,
    timeout: 5000,
    withCredentials: true
})

// Add a request interceptor，发起请求之前执行
instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        // @ts-ignore
        config.headers.token = getToken();
        NProgress.start(); // 启动loading
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor，请求返会之后执行
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        NProgress.done();
        return response;
    },
    function (error) {
        NProgress.done(); // 关闭loading
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export const get = (url: string, params: any = {}) =>
    instance.get(url, { params }).then(res => res.data)

export const post = (url: string, data: any = {}) =>
    instance.post(url, data).then(res => res.data)

export const put = (url: string, data: any = {}) =>
    instance.put(url, data).then(res => res.data)

export const patch = (url: string, data: any = {}) =>
    instance.patch(url, data).then(res => res.data)

export const del = (url: string) =>
    instance.delete(url).then(res => res.data)