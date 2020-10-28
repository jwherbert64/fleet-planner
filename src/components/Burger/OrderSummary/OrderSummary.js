import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			return (
				<li key={igKey}>
					<span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
				</li>
			);
		});

	return (
		<Aux>
			<div className={classes.orderSummary}>
				<h2>Your burger</h2>
				<p>A delicious burger with:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p>Total Price: {props.price.toFixed(2)}</p>
				<p>Do you want to checkout?</p>
				<Button
					btnType="danger"
					clicked={props.purchaseCancelled}>
					CANCEL
				</Button>
				<Button
					btnType="success"
					clicked={props.purchaseContinued}>
					CONTINUE
				</Button>
			</div>
		</Aux>
	);
};

export default orderSummary;