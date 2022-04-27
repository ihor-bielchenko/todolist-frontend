import axios from 'axios';
import Store from 'components/Store';
import { fireShow as actionSnackbarShow } from 'components/Store/snackbar/actions/show.js';
import { fireShow as actionLoaderShow } from 'components/Store/loader/actions/show.js';
import { fireHide as actionLoaderHide } from 'components/Store/loader/actions/hide.js';

/**
 * @return {Function}
 */
export const fireSignIn = (name, password, navigate) => async (prefix = 'auth') => {
	if (!name
		|| !password) {
		return actionSnackbarShow('error', 'Необходимо заполнить все поля')();
	}
	try {
		actionLoaderShow()();

		const request = await axios(`${process.env.URL_API}/${process.env.URL_API_LOGIN}?name=${name}&password=${password}`);
		localStorage.setItem('access_token', request.data.data.access_token);
		localStorage.setItem('refresh_token', request.data.data.refresh_token);

		setTimeout(() => {
			Store().dispatch({
				type: prefix +'.signIn',
			});
			navigate('/');
		}, 1000);
	}
	catch (err) {
		actionSnackbarShow('error', `Возникла ошибка при авторизации: [${err.response.data.message}]`)();
		actionLoaderHide()();
	}
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerSignIn = (state, action) => {
	return {
		authFlag: true,
	};
};
