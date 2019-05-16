import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Transition } from 'react-spring/renderprops';
import { MenuList, HamburgerMenuList } from 'Components';
import { Toggle, darkBackground, borderColor } from 'Utils';
import { MenuButton } from 'Elements';
import logo from 'logo.png';

const Header = () => {
	return (
		<HeaderWrapper>
			<Link to='/'>
				<Logo src={logo} className='App-logo' alt='logo' />
			</Link>
			<Toggle>
				{({ on, toggle }) => (
					<Fragment>
						<MenuButton
							color='white'
							onClick={toggle}
							open={on}
						/>
						<Transition
							unique
							items={on}
							from={{
								transform: 'translateX(100%)',
							}}
							enter={{
								transform: 'translateX(0%)',
							}}
							leave={{
								transform: 'translateX(100%)',
							}}
						>
							{on => on && HamburgerMenuList}
						</Transition>
					</Fragment>
				)}
			</Toggle>
			<MenuList />
		</HeaderWrapper>
	);
};

export const HeaderWrapper = styled.div`
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
`;

export const Logo = styled.img`
	height: 4rem;
	color: white;
	pointer-events: none;
`;

export default Header;
