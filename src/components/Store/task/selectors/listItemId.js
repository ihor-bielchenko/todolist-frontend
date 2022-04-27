import { createSelector } from 'reselect';

/**
 * @param {number} index
 * @return {Function}
 */
const listItemId = (index) => createSelector(
	(state) => state.task.list.data[index],
	(state) => state.id,
);

export default listItemId;
