import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const listSortColumn = (columnName) => createSelector(
	(state) => (state.task.list ?? {}).sort ?? {},
	(state) => state[columnName],
);

export default listSortColumn;
