import React from 'react';
import { useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import Loader from './Loader.jsx';
import selectorLoaderVisible from 'components/Store/loader/selectors/visible.js';
import { fireSchema as actionLoaderSchema } from 'components/Store/loader/actions/schema.js';

let Provider = ({ children }) => {
	const visibleFlag = useSelector(selectorLoaderVisible());

	// onMount
	React.useEffect(() => {
		actionLoaderSchema()();
	}, []);

	return <React.Fragment>
		{(typeof visibleFlag === 'boolean')
			? visibleFlag
				? <Backdrop open={!!visibleFlag}>
					<Loader />
				</Backdrop>
				: children
			: <React.Fragment />}
	</React.Fragment>
};

Provider = React.memo(Provider);
Provider.defaultProps = {
};

export default Provider;
