import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const listTotal = (index) => createSelector(
	(state) => state.task.list,
	(state) => state.page,
);

export default listTotal;
