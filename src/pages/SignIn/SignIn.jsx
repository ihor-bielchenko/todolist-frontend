import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import onLogin from './onLogin.js';

let SignIn = () => {
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
						Авторизация
					</Typography>
				</Grid>
				<Grid 
					item
					xs="auto">
					<Link to="/">
						<Typography>
							Задачи
						</Typography>
					</Link>
				</Grid>
			</Grid>
		</Box>
		<Box 
			px={4}
			py={2}>
			<Paper>
				<form onSubmit={onLogin}>
					<Box p={2}>
						<TextField
							fullWidth
							required
							name="name"
							label="Логин"
							type="text" />
					</Box>
					<Box p={2}>
						<TextField
							fullWidth
							required
							name="password"
							label="Пароль"
							type="password" />
					</Box>
					<Box p={2}>
						<Button
							type="submit"
							disableElevation
							variant="contained"
							color="primary">
							Войти
						</Button>
					</Box>
				</form>
			</Paper>
		</Box>
	</React.Fragment>
};

SignIn = React.memo(SignIn);
SignIn.defaultProps = {
};

export default SignIn;
