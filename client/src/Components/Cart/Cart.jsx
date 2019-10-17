import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../Context';
import CartColumns from './CartColumns';
import CartList from './CartList';
import { Link } from 'react-router-dom';
// import EnterBilling from './EnterBilling';

export default class Cart extends Component {
	render() {
		return (
			<React.Fragment>
				<ProductConsumer>
					{(value) => {
						const { cart } = value;
						if (cart.length > 0) {
							return (
								<FullCart>
									<CartTitle>
										<h1>Your Cart</h1>
									</CartTitle>

									<CartColumns />
									<CartList value={value} />

									<div className="co-btn">
										<Link to="/signup">
											<CheckoutBtn>Check Out</CheckoutBtn>
										</Link>
									</div>
								</FullCart>
							);
						} else {
							return (
								<CartTitle>
									<h1>Your Cart is Empty</h1>
								</CartTitle>
							);
						}
					}}
				</ProductConsumer>
			</React.Fragment>
		);
	}
}

const FullCart = styled.div`
	.co-btn {
		padding: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const CartTitle = styled.div`
	text-align: center;
	font-family: 'Luckiest Guy', cursive;
	margin-top: 2rem;
`;

const CheckoutBtn = styled.button`
	background-color: #f0a4f0;
	border: .05rem solid #f0a4f0;
	border-radius: .4rem;
	color: white;
	font-size: 1.4rem;
	padding: .5rem .7rem;
	cursor: pointer;
	transition: all .5s ease-in-out;
	&:hover {
		background-color: white;
		color: #f0a4f0;
	}
	&:focus {
		outline: none;
	}
`;
