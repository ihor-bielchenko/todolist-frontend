import axios from 'axios';
import Store from 'components/Store';
import { fireShow as actionSnackbarShow } from 'components/Store/snackbar/actions/show.js';
import { fireShow as actionLoaderShow } from 'components/Store/loader/actions/show.js';
import { fireHide as actionLoaderHide } from 'components/Store/loader/actions/hide.js';


/**
 * @return {Function}
 */
export const fireSchema = (page, limit, sort) => async (prefix = 'task') => {
	try {
		actionLoaderShow()();

		const {
			page: currentPage,
			limit: currentLimit,
		} = Store().getState().task.list ?? {};

		let queryStr = `${process.env.URL_API}/${process.env.URL_API_TASK}?page=${page ?? currentPage}&limit=${limit ?? currentLimit}`;

		if (sort) {
			queryStr += `&sort=${sort}`;
		}
		const request = await axios(queryStr);

		Store().dispatch({
			type: prefix +'.schema',
			payload: {
				page: page ?? currentPage,
				limit: limit ?? currentLimit,
				total: request.data.data.count,
				data: request.data.data.rows,
			},
		});
		setTimeout(() => {
			actionLoaderHide()();
		}, 1000);
	}
	catch (err) {
		return actionSnackbarShow('error', `Возникла ошибка при получении списка задач: [${err.response.data.message}]`)();
	}
};

/**
 * @param {object} state - Current redux state
 * @param {object} action - Action data
 * @return {object} New state
 */
export const reducerSchema = (state, action) => {
	return {
		form: {
			id: 0,
			name: '',
			email: '',
			text: '',
			statusId: 1,
		},
		list: {
			sort: {},
			page: 0,
			limit: 3,
			...state.list,
			...action.payload,
		},
	};
};
