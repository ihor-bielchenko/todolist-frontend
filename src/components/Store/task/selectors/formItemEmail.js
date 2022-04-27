import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const formItemEmail = () => createSelector(
	(state) => state.task.form,
	(state) => state.email,
);

export default formItemEmail;
