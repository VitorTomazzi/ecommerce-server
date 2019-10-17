import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class WhoWeAre extends Component {
	render() {
		return (
			<Hero>
				<div className="hero-image">
					<div className="hero-text">
						<h1>
							<span className="a">Kr</span>
							<span className="b">un</span>
							<span className="c">ch</span>
						</h1>

						<h5 className="text-capitalize">
							breakfast bars on-the-go
							<i class="fas fa-running" />
						</h5>

						<div className="button-section">
							<Link to="/cereal-list">
								<StartButton>Let's start!</StartButton>
							</Link>
						</div>
					</div>
				</div>
			</Hero>
		);
	}
}

const Hero = styled.div`
	/* The hero image */
	.hero-image {
		/* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
		background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
			url("https://images.unsplash.com/photo-1515774004412-e3185c2a8217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1984&q=80");

		/* Set a specific height */
		width: 100vw;
		height: 100vh;

		/* Position and center the image to scale nicely on all screens */
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	/* Place text in the middle of the image */
	.hero-text {
		padding: 1rem;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		align-items: center;
		text-align: center;
		position: absolute;
		top: 44%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: rgba(0, 0, 0, .9);
	}
	.hero-text h1 {
		font-size: 7.4rem;
		letter-spacing: .2rem;
		color: #f0a4f0;

		text-shadow: .1rem .1rem .8rem rgba(0, 0, 0, .2);
	}
	.hero-text h5 {
		font-size: 2.4rem;
		letter-spacing: .2rem;
		color: #a4a4f0;
		width: 25rem;
		text-align: center;
		text-wrap: wrap;
		text-shadow: .1rem .1rem .8rem rgba(0, 0, 0, .2);
	}
	.hero-text p {
		font-size: 2.2rem;
		width: 30rem;
		color: #a4a4f0;

		margin-left: 1rem;
	}
	.button-section {
		margin-top: 2rem;
	}
	.fa-running {
		padding-left: 1rem;
		${'' /* color: #f0a4f0 */};
	}
`;

//styled component for button. we can put this in its own component file later if we want
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
