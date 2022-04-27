import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const formItemStatusId = () => createSelector(
	(state) => state.task.form,
	(state) => state.statusId,
);

export default formItemStatusId;
