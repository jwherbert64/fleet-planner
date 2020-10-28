import React, { Component } from 'react';

import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
	render () {
		let ingredient = null;

		switch (this.props.type) {
			case ('bread-top'):
				ingredient = (
					<div className={classes.breadTop}>
						<div className={classes.seed}></div>
						<div className={classes.seed}></div>
					</div>
				);
				break;
			case ('bread-bottom'):
				ingredient = <div className={classes.breadBottom}></div>
				break;
			case ('meat'):
				ingredient = <div className={classes.meat}></div>;
				break;
			case ('cheese'):
				ingredient = <div className={classes.cheese}></div>;
				break;
			case ('bacon'):
				ingredient = <div className={classes.bacon}></div>;
				break;
			case ('salad'):
				ingredient = <div className={classes.salad}></div>;
				break;
			default:
				ingredient = null;
		}

		return ingredient;
	}
}

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredient;