import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const listData = () => createSelector(
	(state) => state.task.list ?? {},
	(state) => state.data ?? [],
);

export default listData;
