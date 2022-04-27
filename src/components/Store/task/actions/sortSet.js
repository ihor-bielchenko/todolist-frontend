import Store from 'components/Store';

/**
 * @param {string} columnName
 * @param {string} direction
 * @return {Function}
 */
export const fireSortSet = (columnName, direction) => async (prefix = 'task') => {
	Store().dispatch({
		type: prefix +'.sortSet',
		payload: {
			columnName,
			direction,
		},
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerSortSet = (state, action) => {
	return state;
};
