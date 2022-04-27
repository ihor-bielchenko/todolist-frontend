import { createSelector } from 'reselect';

/**
 * @param {number} index
 * @return {Function}
 */
const listItemStatusId = (index) => createSelector(
	(state) => state.task.list.data[index],
	(state) => state.statusId,
);

export default listItemStatusId;
