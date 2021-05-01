import React from 'react';
import {Link} from 'react-router-dom';
import {StyledDiv} from './styled';

export const LandingPage = () => {
	return (
		<StyledDiv>
			<div className='div_nav'>
				<h2 className='title'>Pokemon Companion App</h2>
			</div>
			<div className='div_content'>
				<h3 className='h3'> Welcome👋</h3>
				<hr className='hr'></hr>
				<p className='p'>
					Find your favorite pokemon in one place, check their details and add
					your own pokemons!
				</p>
			</div>
			<div className='div_btn'>
				<Link to='/home'>
					<button className='btn'>Lets Go</button>
				</Link>
			</div>
		</StyledDiv>
	);
};

export default LandingPage;
