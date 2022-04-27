import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const listSortString = () => createSelector(
	(state) => (state.task.list ?? {}).sort ?? {},
	(state) => JSON.stringify(state),
);

export default listSortString;
