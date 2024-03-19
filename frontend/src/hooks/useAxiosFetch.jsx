import React, { useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080/',
    });

    // Interceptor to add token to request
    useEffect(() => {
        // request interceptor
        const requestInterceptor = axiosInstance.interceptors.request.use(function (config) {
            // Modify the config if needed, such as adding headers
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // response interceptor
        const responseInterceptor = axiosInstance.interceptors.response.use(function (response) {
            // Process the response if needed
            return response;
        }, function (error) {
            return Promise.reject(error);
        });

        return () => {
            axiosInstance.interceptors.request.eject(requestInterceptor);
            // Eject the request interceptor
            axiosInstance.interceptors.response.eject(responseInterceptor);
            // Eject the response interceptor
        }
    }, [axiosInstance]);

    return axiosInstance;
}

export default useAxiosFetch;
