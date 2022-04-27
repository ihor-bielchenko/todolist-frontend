import axios from 'axios';
import { fireShow as actionSnackbarShow } from 'components/Store/snackbar/actions/show.js';
import { fireShow as actionLoaderShow } from 'components/Store/loader/actions/show.js';
import { fireHide as actionLoaderHide } from 'components/Store/loader/actions/hide.js';
import { fireSchema as actionTaskSchema } from 'components/Store/task/actions/schema.js';
import { fireClose as actionMenuClose } from 'components/Store/menu/actions/close.js';

export const onStatus = async (taskId) => {
	actionLoaderShow()();

	try {
		await axios.patch(`${process.env.URL_API}/${process.env.URL_API_TASK}/${taskId}/${process.env.URL_API_TASK_STATUS}`, {
			statusId: 2,
			access_token: localStorage.getItem('access_token'),
		});
		await actionTaskSchema()();
		actionSnackbarShow('success', 'Статус задачи успешно изменен')();
		actionMenuClose(taskId.toString())();
	}
	catch (err) {
		actionSnackbarShow('error', `Возникла ошибка при изменении статуса задачи: [${err.response.data.message}]`)();
		actionLoaderHide()();
	}
};

export default onStatus;
