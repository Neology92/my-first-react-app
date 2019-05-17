import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darkBackground, borderColor } from 'Utils';
import { Menu } from 'Components';

import logo from 'logo.png';

const Header = ({ className }) => (
	<header className={className}>
		<Link to='/'>
			<img src={logo} alt='logo' />
		</Link>
		<Menu />
	</header>
);

export default styled(Header)`
	padding: 0 5vw;
	height: 10vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-size: calc(10px + 2vmin);
	color: white;
	background-color: ${darkBackground};
	border: solid 1px ${borderColor};

	& img {
		height: 4rem;
		color: white;
		pointer-events: none;
	}
`;
