import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const listPage = () => createSelector(
	(state) => state.task.list,
	(state) => state.page,
);

export default listPage;
