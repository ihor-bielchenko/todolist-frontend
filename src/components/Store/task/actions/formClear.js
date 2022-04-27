import Store from 'components/Store';

/**
 * @return {Function}
 */
export const fireFormClear = () => async (prefix = 'task') => {
	Store().dispatch({
		type: prefix +'.formClear',
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerFormClear = (state, action) => {
	return {
		...state,
		form: {
			id: 0,
			name: '',
			email: '',
			text: '',
			statusId: 1,
		},
	};
};
