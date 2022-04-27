import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const formItemName = () => createSelector(
	(state) => state.task.form,
	(state) => state.name,
);

export default formItemName;
