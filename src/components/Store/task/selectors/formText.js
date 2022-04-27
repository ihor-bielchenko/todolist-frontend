import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const formText = () => createSelector(
	(state) => (state.task ?? {}).form ?? {},
	(state) => state.text,
);

export default formText;
