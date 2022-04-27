import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const text = () => createSelector(
	(state) => state.snackbar,
	(state) => state.text,
);

export default text;
