import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const listLimit = () => createSelector(
	(state) => state.task.list ?? {},
	(state) => state.limit,
);

export default listLimit;
