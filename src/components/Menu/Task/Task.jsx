import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import selectorAuthFlag from 'components/Store/auth/selectors/authFlag.js';
import { fireOpen as actionDialogOpen } from 'components/Store/dialog/actions/open.js';
import { fireClose as actionMenuClose } from 'components/Store/menu/actions/close.js';
import { fireFormSet as actionTaskFormSet } from 'components/Store/task/actions/formSet.js';
import Menu from '../Menu.jsx';
import onStatus from './onStatus.js';

let Task = ({ 
	id,
	name,
	email,
	text,
	statusId, 
}) => {
	const authFlag = useSelector(selectorAuthFlag());
	const onEdit = React.useCallback((e) => {
		actionMenuClose(id.toString())();
		actionTaskFormSet({
			id,
			name,
			email,
			text,
			statusId,
		})();
		actionDialogOpen(process.env.DIALOG_TASK)();
	}, [
		id,
		name,
		email,
		text,
		statusId,
	]);
	const onDone = React.useCallback(() => onStatus(id), [
		id,
	]);

	return <React.Fragment>
		<Menu id={id.toString()}>
			{(authFlag && statusId !== 2)
				&& <MenuItem onClick={onDone}>
					<ListItemIcon>
						<DoneIcon color="success" />
					</ListItemIcon>
					<ListItemText>
						<Typography color="success">
							Выполнено
						</Typography>
					</ListItemText>
				</MenuItem>}
			<MenuItem
				component={Link}
				to={`/${id}`}
				onClick={onEdit}>
				<ListItemIcon>
					<EditIcon color="primary" />
				</ListItemIcon>
				<ListItemText>
					<Typography color="primary">
						Редактировать
					</Typography>
				</ListItemText>
			</MenuItem>
		</Menu>
	</React.Fragment>;
};

Task = React.memo(Task);
Task.defaultProps = {
};
Task.propTypes = {
	id: PropTypes.number,
};

export default Task;
