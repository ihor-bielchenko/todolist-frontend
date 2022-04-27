import Store from 'components/Store';

/**
 * @param {number} newPage
 * @return {Function}
 */
export const firePagination = (newPage) => async (prefix = 'task') => {
	Store().dispatch({
		type: prefix +'.pagination',
		payload: newPage,
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerPagination = (state, action) => {
	return state;
};
