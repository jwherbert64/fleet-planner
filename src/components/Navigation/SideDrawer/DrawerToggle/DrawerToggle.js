import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
	<div
		className={classes.mobileOnly}
		onClick={props.clicked}>
		MENU
	</div>
);

export default drawerToggle;