import React from 'react';

let Home = () => {
	return <React.Fragment>
		Home
	</React.Fragment>
};

Home = React.memo(Home);
Home.defaultProps = {
};

export default Home;
