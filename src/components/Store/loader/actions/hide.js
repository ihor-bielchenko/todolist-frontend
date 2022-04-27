import Store from 'components/Store';

/**
 * @return {Function}
 */
export const fireHide = () => async (prefix = 'loader') => {
	Store().dispatch({
		type: prefix +'.hide'
	});
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerHide = (state, action) => {
	return false;
};
