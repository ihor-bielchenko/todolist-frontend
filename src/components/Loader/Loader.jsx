import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

let Loader = ({ 
	children,
	...props 
}) => {
	return <React.Fragment>
		<CircularProgress 
			size={100}
			color="inherit"
			{ ...props } />
	</React.Fragment>
};

Loader = React.memo(Loader);
Loader.defaultProps = {
};

export default Loader;
