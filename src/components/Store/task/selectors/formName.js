import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const formName = () => createSelector(
	(state) => (state.task ?? {}).form ?? {},
	(state) => state.name,
);

export default formName;
