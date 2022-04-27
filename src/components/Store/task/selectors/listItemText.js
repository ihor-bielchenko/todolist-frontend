import { createSelector } from 'reselect';

/**
 * @param {number} index
 * @return {Function}
 */
const listItemText = (index) => createSelector(
	(state) => state.task.list.data[index],
	(state) => state.text,
);

export default listItemText;
