import axios from 'axios';

const BASE_URL = 'http://demo0419605.mockable.io/';

const axiosManager = axios.create({
	baseURL: BASE_URL,
});

export const getExperiencesFromAPI = async () => {
	const URL_SUFFIX = '/experiences';
	const responseData = await axiosManager.get(URL_SUFFIX);
	return responseData;
};