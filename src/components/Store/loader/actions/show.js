import Store from 'components/Store';

/**
 * @return {Function}
 */
export const fireShow = () => async (prefix = 'loader') => {
	Store().dispatch({
		type: prefix +'.show'
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerShow = (state, action) => {
	return true;
};
