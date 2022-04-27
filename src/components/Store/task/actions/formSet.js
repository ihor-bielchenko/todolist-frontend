import Store from 'components/Store';

/**
 * @param {object} payload
 * @return {Function}
 */
export const fireFormSet = (payload) => async (prefix = 'task') => {
	Store().dispatch({
		type: prefix +'.formSet',
		payload,
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerFormSet = (state, action) => {
	return {
		...state,
		form: {
			...state.form,
			...action.payload,
		},
	};
};
