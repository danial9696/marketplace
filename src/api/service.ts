import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Sentry from './sentry';

const apiService = axios.create({
  baseURL: process.env.API_BASE_URL,
});

const service = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiService.get(url, config);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        Sentry.captureException(`Response error: ${error.response.data.message}`);
        throw new Error(`Response error: ${error.response.data.message}`);
      } else if (error.request) {
        Sentry.captureException(`Network Error: ${error.request}`);
        throw new Error(`Network Error: ${error.request}`);
      } else {
        Sentry.captureException(`General Error: ${error.message}`);
        throw new Error(`General Error: ${error.message}`);
      }
    }
  },
  post: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiService.post(url, data, config);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        Sentry.captureException(`Response error: ${error.response.data.message}`);
        throw new Error(`Response error: ${error.response.data.message}`);
      } else if (error.request) {
        Sentry.captureException(`Network Error: ${error.request}`);
        throw new Error(`Network Error: ${error.request}`);
      } else {
        Sentry.captureException(`General Error: ${error.message}`);
        throw new Error(`General Error: ${error.message}`);
      }
    }
  },
  put: async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiService.put(url, data, config);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        Sentry.captureException(`Response error: ${error.response.data.message}`);
        throw new Error(`Response error: ${error.response.data.message}`);
      } else if (error.request) {
        Sentry.captureException(`Network Error: ${error.request}`);
        throw new Error(`Network Error: ${error.request}`);
      } else {
        Sentry.captureException(`General Error: ${error.message}`);
        throw new Error(`General Error: ${error.message}`);
      }
    }
  },
  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await apiService.delete(url, config);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        Sentry.captureException(`Response error: ${error.response.data.message}`);
        throw new Error(`Response error: ${error.response.data.message}`);
      } else if (error.request) {
        Sentry.captureException(`Network Error: ${error.request}`);
        throw new Error(`Network Error: ${error.request}`);
      } else {
        Sentry.captureException(`General Error: ${error.message}`);
        throw new Error(`General Error: ${error.message}`);
      }
    }
  },
};

export default service;
