import Store from 'components/Store';

/**
 * @param {string} status
 * @param {string} text
 * @return {Function}
 */
export const fireShow = (status, text, timeout = 3000) => async (prefix = 'snackbar') => {
	Store().dispatch({
		type: prefix +'.show',
		payload: {
			status,
			text,
			timeout,
		},
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerShow = (state, action) => {
	return {
		...state,
		...action.payload,
		visible: true,
	};
};
