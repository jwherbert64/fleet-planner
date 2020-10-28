import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className={classes.navigationItems}>
		<NavigationItem
			link="/"
			active>
			BURGER BUILDER
		</NavigationItem>
		<NavigationItem
			link="/">
			CHECKOUT
		</NavigationItem>
	</ul>
);

export default navigationItems;