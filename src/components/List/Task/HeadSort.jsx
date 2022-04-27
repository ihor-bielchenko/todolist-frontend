import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import selectorTaskListSortColumn from 'components/Store/task/selectors/listSortColumn.js';
import { fireSortSet as actionTaskSortSet } from 'components/Store/task/actions/sortSet.js';
// import { fireSortClear as actionTaskSortClear } from 'components/Store/task/actions/sortClear.js';

let HeadSort = ({ 
	columnName,
	children, 
}) => {
	const direction = useSelector(selectorTaskListSortColumn(columnName));
	const onSort = React.useCallback((e) => {
		actionTaskSortSet(columnName, (typeof direction === 'undefined')
			? 0
			: (direction === 0)
				? 1
				: 0)();
	}, [
		columnName,
		direction,
	]);

	return <React.Fragment>
		<TableCell>
			<Box
				display="flex"
				alignItems="center">
				<Typography>
					{children}
				</Typography>
				<IconButton 
					size="small"
					onClick={onSort}>
					{typeof direction === 'undefined'
						? <ArrowUpwardIcon fontSize="small" />
						: (direction === 0)
							? <ArrowUpwardIcon 
								fontSize="small"
								color="primary" />
							: <ArrowDownwardIcon
								fontSize="small"
								color="primary" />}
				</IconButton>
			</Box>
		</TableCell>
	</React.Fragment>;
};

HeadSort = React.memo(HeadSort);
HeadSort.defaultProps = {
};
HeadSort.propTypes = {
	columnName: PropTypes.string,
};

export default HeadSort;
