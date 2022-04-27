import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const status = () => createSelector(
	(state) => state.snackbar,
	(state) => state.status,
);

export default status;
