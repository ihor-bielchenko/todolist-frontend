import main from './main/reducer.js';
import menu from './menu/reducer.js';
import dialog from './dialog/reducer.js';
import loader from './loader/reducer.js';
import auth from './auth/reducer.js';
import task from './task/reducer.js';
import snackbar from './snackbar/reducer.js';

const structure = {
	main,
	menu,
	dialog,
	loader,
	auth,
	task,
	snackbar,
};

export default structure;
