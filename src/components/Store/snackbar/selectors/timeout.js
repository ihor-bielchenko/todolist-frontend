import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const timeout = () => createSelector(
	(state) => state.snackbar,
	(state) => state.timeout,
);

export default timeout;
