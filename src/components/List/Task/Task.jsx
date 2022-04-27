import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import RowTask from 'components/Row/Task';
import selectorTaskListData from 'components/Store/task/selectors/listData.js';
import selectorTaskListPage from 'components/Store/task/selectors/listPage.js';
import selectorTaskListLimit from 'components/Store/task/selectors/listLimit.js';
import selectorTaskListTotal from 'components/Store/task/selectors/listTotal.js';
import selectorTaskListSortString from 'components/Store/task/selectors/listSortString.js';
import { fireSchema as actionTaskSchema } from 'components/Store/task/actions/schema.js';
import { firePagination as actionTaskPagination } from 'components/Store/task/actions/pagination.js';
import { fireOpen as actionDisalogOpen } from 'components/Store/dialog/actions/open.js';
import HeadSort from './HeadSort.jsx';

let Task = () => {
	const listData = useSelector(selectorTaskListData());
	const listPage = useSelector(selectorTaskListPage()) ?? 0;
	const listLimit = useSelector(selectorTaskListLimit()) ?? 3;
	const listTotal = useSelector(selectorTaskListTotal()) ?? 0;
	const sortString = useSelector(selectorTaskListSortString());
	const onCreate = React.useCallback((e) => {
		actionDisalogOpen(process.env.DIALOG_TASK)();
	}, []);
	const onPageChange = React.useCallback((e, newPage) => {
		actionTaskPagination(newPage)();
	}, []);

	// onMount
	React.useEffect(() => {
		actionTaskSchema(listPage, listLimit, sortString)();
	}, [
		listPage,
		listLimit,
		sortString,
	]);

	return <React.Fragment>
		<Paper>
			<Box p={2}>
				<Button
					disableElevation
					variant="contained"
					color="primary"
					onClick={onCreate}
					component={Link}
					to="/0">
					Добавить
				</Button>
				<TableContainer>
					<Table stickyHeader>
						<TableHead>
							<TableRow>
								<HeadSort columnName="name">
									Имя
								</HeadSort>
								<HeadSort columnName="email">
									Email
								</HeadSort>
								<TableCell>
									<Typography>
										Текст задачи
									</Typography>
								</TableCell>
								<HeadSort columnName="statusId">
									Статус
								</HeadSort>
							</TableRow>
						</TableHead>
						<TableBody>
							{listData.map(({ id }, index) => {
								return <RowTask
									key={id}
									index={index} />
							})}
						</TableBody>
					</Table>
					<TablePagination
						component="div"
						rowsPerPageOptions={[{
							label: '',
							value: -1,
						}]}
						rowsPerPage={listLimit}
						count={listTotal}
						page={listPage}
						onPageChange={onPageChange} />
				</TableContainer>
			</Box>
		</Paper>
	</React.Fragment>;
};

Task = React.memo(Task);
Task.defaultProps = {
};

export default Task;
