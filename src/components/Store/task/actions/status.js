import Store from 'components/Store';

/**
 * @param {number} taskId
 * @param {number} newStatusId
 * @return {Function}
 */
export const fireStatus = (taskId, newStatusId) => async (prefix = 'task') => {
	Store().dispatch({
		type: prefix +'.status',
		payload: {
			taskId,
			newStatusId,
		},
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerStatus = (state, action) => {
	return {
		...state,
		...action.payload,
	};
};
