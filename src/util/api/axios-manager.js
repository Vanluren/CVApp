import axios from 'axios';

/**
 * The base url on which all requests are based
 * @type {string}
 */
const BASE_URL = 'https://demo0419605.mockable.io';

/**
 * I create an instance of the axios manager, and passes the base url to it for later instanciating
 * @type {AxiosInstance}
 */
const instance = axios.create({
	baseURL: BASE_URL,
});

const axiosManager = {
	instance,
};

export default axiosManager;