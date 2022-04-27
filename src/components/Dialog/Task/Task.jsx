import React from 'react';
import { useSelector } from 'react-redux';
import { 
	useNavigate,
	useParams, 
} from 'react-router-dom';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import selectorTaskFormName from 'components/Store/task/selectors/formName.js';
import selectorTaskFormEmail from 'components/Store/task/selectors/formEmail.js';
import selectorTaskFormText from 'components/Store/task/selectors/formText.js';
import { fireClose as actionDisalogClose } from 'components/Store/dialog/actions/close.js';
import { fireFormClear as actionTaskFormClear } from 'components/Store/task/actions/formClear.js';
import { fireFormSet as actionTaskFormSet } from 'components/Store/task/actions/formSet.js';
import Dialog from '../Dialog.jsx';
import onCreate from './onCreate.js';
import onUpdate from './onUpdate.js';

let Task = () => {
	const { id: taskId } = useParams();
	const name = useSelector(selectorTaskFormName());
	const email = useSelector(selectorTaskFormEmail());
	const text = useSelector(selectorTaskFormText());
	const navigate = useNavigate();
	const onClose = React.useCallback((e) => {
		actionDisalogClose(process.env.DIALOG_TASK)();
		navigate('/');
	}, [
		navigate,
	]);
	const onName = React.useCallback((e) => {
		actionTaskFormSet({ name: e.target.value })();
	}, []);
	const onEmail = React.useCallback((e) => {
		actionTaskFormSet({ email: e.target.value })();
	}, []);
	const onText = React.useCallback((e) => {
		actionTaskFormSet({ text: e.target.value })();
	}, []);
	const onSave = React.useCallback((e) => {
		Number(taskId) > 0
			? onUpdate(taskId, {
				name,
				email,
				text,
			}, onClose)
			: onCreate({
				name,
				email,
				text,
			}, onClose);
	}, [
		taskId,
		name,
		email,
		text,
		onClose,
	]);

	// onUnmount
	React.useEffect(() => () => {
		actionTaskFormClear()();
	}, []);

	return <React.Fragment>
		<Dialog 
			id={process.env.DIALOG_TASK}
			onClose={onClose}>
			<DialogTitle>
				Task
			</DialogTitle>
			<DialogContent>
				<Box py={2}>
					<TextField
						fullWidth
						required
						name="name"
						label="Имя"
						type="text"
						value={name}
						onChange={onName} />
				</Box>
				<Box py={2}>
					<TextField
						fullWidth
						required
						name="email"
						label="Email"
						type="email"
						value={email}
						onChange={onEmail} />
				</Box>
				<Box py={2}>
					<TextField
						fullWidth
						required
						multiline
						rows={4}
						name="text"
						label="Текст задачи"
						type="text"
						value={text}
						onChange={onText} />
				</Box>
			</DialogContent>
			<DialogActions>
				<Button 
					onClick={onClose}
					color="error">
					Отмена
				</Button>
				<Button onClick={onSave}>
					Сохранить
				</Button>
			</DialogActions>
		</Dialog>
	</React.Fragment>;
};

Task = React.memo(Task);
Task.defaultProps = {
};

export default Task;