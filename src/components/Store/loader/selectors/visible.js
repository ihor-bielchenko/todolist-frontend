import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const visible = () => createSelector(
	(state) => state.loader,
	(state) => state,
);

export default visible;
