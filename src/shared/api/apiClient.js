import applyConverters from 'axios-case-converter';
import axios from 'axios';

const baseURL = `${process.env.BASE_URL}/${process.env.API_PREFIX}/`;

const apiClient = applyConverters(
  axios.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
);

apiClient.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');

  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }

  return request;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { message } = error;
    const { status, data } = error.response;
    const { method, url } = error.config;

    if (status === 401) {
      // Replace the following line with your actual redirect logic
      window.location.replace('/login');

      // Resolve the promise with a specific value indicating the redirect
      return Promise.resolve('Redirected to login page');
    }

    console.log(`API [${method?.toUpperCase()}] ${url} | Error ${status} ${data?.message || ''} | ${message}`, error);
    // Continue rejecting the promise with the original error object
    return Promise.reject(error);
  }
);

export default apiClient;
