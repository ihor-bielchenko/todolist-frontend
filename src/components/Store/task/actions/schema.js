import Store from 'components/Store';

/**
 * @return {Function}
 */
export const fireSchema = () => async (prefix = 'task') => {
	Store().dispatch({
		type: prefix +'.task',
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerSchema = (state, action) => {
	return {
		form: {
			id: 0,
			name: '',
			email: '',
			text: '',
			statusId: 1,
		},
		list: {
			page: 1,
			limit: 3,
			total: 10,
			data: [],
		},
	};
};
