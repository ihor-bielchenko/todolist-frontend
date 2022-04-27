import React from 'react';
import { useSelector } from 'react-redux';
import {
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListTask from 'components/List/Task';
import DialogTask from 'components/Dialog/Task';
import selectorAuthFlag from 'components/Store/auth/selectors/authFlag.js';
import { fireSignOut as actionAuthSignOut } from 'components/Store/auth/actions/signOut.js';

let Home = () => {
	const authFlag = useSelector(selectorAuthFlag());
	const onSignOut = React.useCallback((e) => {
		actionAuthSignOut()();
	}, []);

	return <React.Fragment>
		<Box 
			px={4}
			py={2}>
			<Grid
				container
				justifyContent="space-between"
				alignItems="center">
				<Grid 
					item
					xs={true}>
					<Typography variant="h3">
						Задачи
					</Typography>
				</Grid>
				<Grid 
					item
					xs="auto">
					{authFlag
						? <Link 
							to="#"
							onClick={onSignOut}>
							<Typography>
								Выход
							</Typography>
						</Link>
						: <Link to={`/${process.env.URL_PAGE_SIGN_IN}`}>
							<Typography>
								Авторизация
							</Typography>
						</Link>}
				</Grid>
			</Grid>
		</Box>
		<Box 
			px={4}
			py={2}>
			<ListTask />
		</Box>
		<Routes>
			<Route
				path=":id"
				element={<DialogTask />} />
		</Routes>
	</React.Fragment>
};

Home = React.memo(Home);
Home.defaultProps = {
};

export default Home;
