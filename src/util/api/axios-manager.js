import axios from 'axios';

const BASE_URL = 'https://demo0419605.mockable.io';

const instance = axios.create({
	baseURL: BASE_URL,
});

const axiosManager = {
	instance,
};

export default axiosManager;