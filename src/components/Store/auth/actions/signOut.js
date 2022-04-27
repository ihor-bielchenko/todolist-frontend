import Store from 'components/Store';

/**
 * @return {Function}
 */
export const fireSignOut = (name, password) => async (prefix = 'auth') => {
	localStorage.removeItem('access_token');
	localStorage.removeItem('refresh_token');
	
	Store().dispatch({
		type: prefix +'.signOut',
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerSignOut = (state, action) => {
	return {
		authFlag: false,
	};
};
