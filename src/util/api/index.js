import axiosManager from './axios-manager';

/**
 * Sends a GET request to a mockable api, where the experiences are
 * contained in an array of objects
 * @returns {Promise.<*>}
 */
export const getExperiencesFromAPI = async () => {
	const url = '/experiences';
	const response = await axiosManager.instance.get(url);
	return response.data;
};