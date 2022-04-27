import Store from 'components/Store';

/**
 * @param {string} columnName
 * @return {Function}
 */
export const fireSortClear = (columnName) => async (prefix = 'task') => {
	Store().dispatch({
		type: prefix +'.sortClear',
		payload: columnName
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerSortClear = (state, action) => {
	return state;
};
