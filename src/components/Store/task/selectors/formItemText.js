import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const formItemText = () => createSelector(
	(state) => state.task.form,
	(state) => state.text,
);

export default formItemText;
