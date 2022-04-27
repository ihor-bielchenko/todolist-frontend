import { createSelector } from 'reselect';

/**
 * @param {number} index
 * @return {Function}
 */
const listItemName = (index) => createSelector(
	(state) => state.task.list.data[index],
	(state) => state.name,
);

export default listItemName;
