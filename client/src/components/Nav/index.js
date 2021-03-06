import React from 'react';
import {Link} from 'react-router-dom';
import {StyledDiv} from './styled';

export const Nav = () => {
	return (
		<StyledDiv>
			<div className='div_logo'>
				<Link to='/home' className='logo'>
					<h2>Pokemon Companion App</h2>
				</Link>
			</div>
			<div className='div_menu'>
				<div className='div_link'>
					<Link to='/home' className='link'>
						HOME
					</Link>
				</div>
				<div className='div_link'>
					<Link to='/create' className='link'>
						CREATE POKEMON
					</Link>
				</div>
			</div>
		</StyledDiv>
	);
};

export default Nav;
