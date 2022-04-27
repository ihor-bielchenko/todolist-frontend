import React from 'react';
import Snackbar from './Snackbar.jsx';

let Provider = ({ children }) => {
	return <React.Fragment>
		{children}
		<Snackbar />
	</React.Fragment>;
};

Provider = React.memo(Provider);
Provider.defaultProps = {
};

export default Provider;
