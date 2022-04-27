import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import MenuTask from 'components/Menu/Task';
import selectorTaskListItemId from 'components/Store/task/selectors/listItemId.js';
import selectorTaskListItemName from 'components/Store/task/selectors/listItemName.js';
import selectorTaskListItemEmail from 'components/Store/task/selectors/listItemEmail.js';
import selectorTaskListItemText from 'components/Store/task/selectors/listItemText.js';
import selectorTaskListItemStatusId from 'components/Store/task/selectors/listItemStatusId.js';
import selectorTaskListItemStatusName from 'components/Store/task/selectors/listItemStatusName.js';
import { fireOpen as actionMenuOpen } from 'components/Store/menu/actions/open.js';

let Task = ({ index }) => {
	const id = useSelector(selectorTaskListItemId(index));
	const name = useSelector(selectorTaskListItemName(index));
	const email = useSelector(selectorTaskListItemEmail(index));
	const text = useSelector(selectorTaskListItemText(index));
	const statusId = useSelector(selectorTaskListItemStatusId(index));
	const statusName = useSelector(selectorTaskListItemStatusName(index));
	const onMenu = React.useCallback((e) => {
		actionMenuOpen(id, e.currentTarget)();
	}, [
		id,
	]);

	return <React.Fragment>
		<TableRow >
			<TableCell>
				<Typography>
					{name}
				</Typography>
			</TableCell>
			<TableCell>
				<Typography>
					{email}
				</Typography>
			</TableCell>
			<TableCell>
				<Typography>
					{text}
				</Typography>
			</TableCell>
			<TableCell>
				{statusId === 2
					? <CheckIcon color="success" />
					: <React.Fragment />}
				<Typography>
					{statusName}
				</Typography>
			</TableCell>
			<TableCell width="1%">
				<IconButton onClick={onMenu}>
					<MoreVertIcon />
				</IconButton>
				<MenuTask 
					id={id}
					name={name}
					email={email}
					text={text}
					statusId={statusId} />
			</TableCell>
		</TableRow>
	</React.Fragment>;
};

Task = React.memo(Task);
Task.defaultProps = {
};
Task.propTypes = {
	index: PropTypes.number,
};

export default Task;
