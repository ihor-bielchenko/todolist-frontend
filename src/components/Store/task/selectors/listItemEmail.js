import { createSelector } from 'reselect';

/**
 * @param {number} index
 * @return {Function}
 */
const listItemEmail = (index) => createSelector(
	(state) => state.task.list.data[index],
	(state) => state.email,
);

export default listItemEmail;
