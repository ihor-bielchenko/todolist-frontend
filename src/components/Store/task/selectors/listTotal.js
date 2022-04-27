import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const listTotal = (index) => createSelector(
	(state) => state.task.list ?? {},
	(state) => state.total,
);

export default listTotal;
