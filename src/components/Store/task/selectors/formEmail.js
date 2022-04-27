import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const formEmail = () => createSelector(
	(state) => (state.task ?? {}).form ?? {},
	(state) => state.email,
);

export default formEmail;
