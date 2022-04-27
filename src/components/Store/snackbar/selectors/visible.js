import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const visible = () => createSelector(
	(state) => state.snackbar,
	(state) => state.visible,
);

export default visible;
