import Store from 'components/Store';

/**
 * @param {string} status
 * @param {string} text
 * @return {Function}
 */
export const fireClose = () => async (prefix = 'snackbar') => {
	Store().dispatch({
		type: prefix +'.close',
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerClose = (state, action) => {
	return {
		...state,
		visible: false,
	};
};
