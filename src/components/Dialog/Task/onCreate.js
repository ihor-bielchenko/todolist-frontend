import axios from 'axios';
import { fireShow as actionSnackbarShow } from 'components/Store/snackbar/actions/show.js';
import { fireShow as actionLoaderShow } from 'components/Store/loader/actions/show.js';
import { fireHide as actionLoaderHide } from 'components/Store/loader/actions/hide.js';
import { fireSchema as actionTaskSchema } from 'components/Store/task/actions/schema.js';
import utilsValidateEmail from 'utils/validateEmail.js';

export const onCreate = async ({
	name,
	email,
	text,
}, onDialogClose) => {
	let error = '';

	if (!name) {
		error += 'Поле "name" обязательно для заполнения. ';
	}
	if (!email) {
		error += 'Поле "email" обязательно для заполнения. ';
	}
	else if (!utilsValidateEmail(email)) {
		error += 'Не корректный email. ';
	}
	if (!text) {
		error += 'Поле "text" обязательно для заполнения. ';
	}
	if (error) {
		actionSnackbarShow('error', error)();
		return actionLoaderHide()();
	}
	actionLoaderShow()();

	try {
		await axios.post(`${process.env.URL_API}/${process.env.URL_API_TASK}`, {
			name,
			email,
			text,
		});
		await actionTaskSchema()();
		onDialogClose();
		actionSnackbarShow('success', 'Новая задача успешно создана')();
	}
	catch (err) {
		actionSnackbarShow('error', `Возникла ошибка при добавлении задачи: [${err.response.data.message}]`)();
		actionLoaderHide()();
	}
};

export default onCreate;
