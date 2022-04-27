import { createSelector } from 'reselect';

/**
 * @param {number} index
 * @return {Function}
 */
const listItemStatusName = (index) => createSelector(
	(state) => (state.task.list.data[index] ?? {}).statuses ?? {},
	(state) => state.name,
);

export default listItemStatusName;
