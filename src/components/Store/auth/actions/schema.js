import axios from 'axios';
import Store from 'components/Store';

/**
 * @return {Function}
 */
export const fireSchema = () => async (prefix = 'auth') => {
	try {
		const accessToken = localStorage.getItem('access_token');
		const refreshToken = localStorage.getItem('refresh_token');

		if (accessToken
			&& refreshToken) {
			const request = await axios.post(`${process.env.URL_API}/${process.env.URL_API_REFRESH}`, {
				access_token: localStorage.getItem('access_token'),
				refresh_token: localStorage.getItem('refresh_token'),
			});

			localStorage.setItem('access_token', request.data.data.access_token);
			localStorage.setItem('refresh_token', request.data.data.refresh_token);
		
			Store().dispatch({
				type: prefix +'.schema',
				payload: {
					authFlag: true,
				}
			});
		}
	}
	catch (err) {
		Store().dispatch({
			type: prefix +'.schema',
			payload: {
				authFlag: false,
			}
		});
	}
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerSchema = (state, action) => {
	return {
		authFlag: false,
		...action.payload,
	};
};
