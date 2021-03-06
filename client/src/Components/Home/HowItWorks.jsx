import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class HowItWorks extends Component {
	render() {
		return (
			<React.Fragment>
				<How>
					<div className="how-heading">
						<h2> How it works </h2>
					</div>
					<div className="how-content">
						<Link to="/cereal-list">
							<div className="how">
								<img
									className="how-pic"
									src="https://img.icons8.com/pastel-glyph/64/000000/milk-bottle.png"
									alt="glue"
								/>
								<h3>Pick your ingredients</h3>
							</div>
						</Link>

						<i class="fas fa-chevron-right" />

						<div className="how">
							<img src="https://img.icons8.com/ios/50/000000/cooker.png" alt="oven" />
							<h3>We'll build your bars for you</h3>
						</div>

						<i class="fas fa-chevron-right" />

						<div className="how">
							<img src="https://img.icons8.com/ios/50/000000/successful-delivery.png" alt="delivery" />
							<h3>Sit tight then grab-and-go</h3>
						</div>
					</div>
					<div className="button-section">
						<Link to="/cereal-list">
							<StartButton>To Cereals!</StartButton>
						</Link>
					</div>
				</How>
			</React.Fragment>
		);
	}
}

const How = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 7rem;
	border: .03rem solid #a4a4f0;
	border-right-color: transparent;
	border-left-color: transparent;
	color: #f0a4f0;
	.fa-chevron-right {
		color: #a4a4f0;
		font-size: 3rem;
		padding: 2rem;
	}
	.how-content {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}
	.how-content a {
		text-decoration: none;
	}
	.how {
		text-align: center;
		background: white;
		border: .1rem solid #a4a4f0;
		padding: 2rem;
		border-radius: .5rem;
		/* 320px */
		width: 20rem;
		height: 12rem;
		color: #a4a4f0;
		box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .1);
	}
	.how img {
		margin-bottom: 1rem;
	}
	.button {
		text-align: center;
		margin-top: 3rem;
	}
	.how-heading {
		text-align: center;
		margin-bottom: 2.5rem;
	}
	.how-heading h2 {
		font-size: 3.5rem;
		font-family: 'Luckiest Guy', cursive;
	}
	.button-section {
		margin-top: 4rem;
	}
`;

const StartButton = styled.button`
	background-color: #f0a4f0;
	border: .05rem solid #f0a4f0;
	border-radius: .4rem;
	color: white;
	font-size: 1.4rem;
	padding: .7rem .9rem;
	cursor: pointer;
	transition: all .5s ease-in-out;
	box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .1);
	&:hover {
		background-color: white;
		color: #f0a4f0;
	}
	&:focus {
		outline: none;
	}
`;
