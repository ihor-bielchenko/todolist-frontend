import React from 'react';
import { useSelector } from 'react-redux';
import MiuSnackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import selectorSnackbarVisible from 'components/Store/snackbar/selectors/visible.js';
import selectorSnackbarTimeout from 'components/Store/snackbar/selectors/timeout.js';
import selectorSnackbarStatus from 'components/Store/snackbar/selectors/status.js';
import selectorSnackbarText from 'components/Store/snackbar/selectors/text.js';
import { fireSchema as actionSnackbarSchema } from 'components/Store/snackbar/actions/schema.js';
import { fireClose as actionSnackbarClose } from 'components/Store/snackbar/actions/close.js';

const Alert = React.forwardRef((props, ref) => {
	return <MuiAlert 
		ref={ref}
		elevation={6} 
		variant="filled" 
		{...props} />;
});

let timeoutLink;
let Snackbar = ({ children }) => {
	const visibleFlag = useSelector(selectorSnackbarVisible());
	const timeout = useSelector(selectorSnackbarTimeout());
	const status = useSelector(selectorSnackbarStatus());
	const text = useSelector(selectorSnackbarText());

	// onMount
	React.useEffect(() => {
		actionSnackbarSchema()();
	}, []);

	// onCloseByTimeout
	React.useEffect(() => {
		if (visibleFlag) {
			clearTimeout(timeoutLink);
			timeoutLink = setTimeout(() => {
				actionSnackbarClose()();
			}, timeout);
		}
	}, [
		visibleFlag,
		timeout,
	]);

	return <React.Fragment>
		<MiuSnackbar open={visibleFlag}>
			<Alert severity={status} sx={{ width: '100%' }}>
				{text}
			</Alert>
		</MiuSnackbar>
	</React.Fragment>;
};

Snackbar = React.memo(Snackbar);
Snackbar.defaultProps = {
};

export default Snackbar;
