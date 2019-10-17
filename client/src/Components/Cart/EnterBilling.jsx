import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class EnterBilling extends Component {
	render() {
		return (
			<Billing>
				<div className="billing-container container">
					<form>
						<div className="billing-row">
							<div className="col-50">
								<h3>Billing Address</h3>
								<label for="fname">
									<i className="fa fa-user" /> Full Name
								</label>
								<input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
								<label for="email">
									<i className="fa fa-envelope" /> Email
								</label>
								<input type="text" id="email" name="email" placeholder="john@example.com" />
								<label for="adr">
									<i className="fa fa-address-card-o" /> Address
								</label>
								<input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
								<label for="city">
									<i className="fa fa-institution" /> City
								</label>
								<input type="text" id="city" name="city" placeholder="New York" />

								<div className="billing-row">
									<div className="col-50">
										<label for="state">State</label>
										<input type="text" id="state" name="state" placeholder="NY" />
									</div>
									<div className="col-50">
										<label for="zip">Zip</label>
										<input type="text" id="zip" name="zip" placeholder="10001" />
									</div>
								</div>
							</div>

							<div className="col-50">
								<h3>Payment</h3>
								<label for="fname">Accepted Cards</label>
								<div className="icon-container">
									<i className="fab fa-cc-visa" />
									<i className="fab fa-cc-amex" />
									<i className="fab fa-cc-mastercard" />
									<i className="fab fa-cc-discover" />
								</div>
								<label for="cname">Name on Card</label>
								<input type="text" id="cname" name="cardname" placeholder="John More Doe" />
								<label for="ccnum">Credit card number</label>
								<input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
								<label for="expmonth">Exp Month</label>
								<input type="text" id="expmonth" name="expmonth" placeholder="September" />
								<div className="row">
									<div className="col-50">
										<label for="expyear">Exp Year</label>
										<input type="text" id="expyear" name="expyear" placeholder="2018" />
									</div>
									<div className="col-50">
										<label for="cvv">CVV</label>
										<input type="text" id="cvv" name="cvv" placeholder="352" />
									</div>
								</div>
							</div>
						</div>
						<label>
							<input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
						</label>
						<div className="place-order">
						<Link to="#">
							<NextButton> Place Order </NextButton>
						</Link>
						</div>
					</form>
				</div>
			</Billing>
		);
	}
}

const Billing = styled.div`
	padding: 1rem;
	background-color: white;
	.billing-container {
		padding: 1rem;
	}
	.place-order {
		display:flex;
		justify-content: center;
	}
`;

const NextButton = styled.button`
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
