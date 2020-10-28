import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
	<header className={classes.toolbar}>
		<DrawerToggle
			className={classes.mobileOnly}
			clicked={props.drawerToggleClicked}/>
		<nav className={classes.desktopOnly}>
			<NavigationItems />
		</nav>
	</header>
);

export default toolbar;