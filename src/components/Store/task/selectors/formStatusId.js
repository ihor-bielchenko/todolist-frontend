import { createSelector } from 'reselect';

/**
 * @return {Function}
 */
const formStatusId = () => createSelector(
	(state) => (state.task ?? {}).form ?? {},
	(state) => state.statusId,
);

export default formStatusId;
