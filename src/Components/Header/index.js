import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-spring/renderprops';
import { Toggle } from 'Utils';
import { MenuButton } from 'Elements';
import { HeaderWrapper, Logo } from './style';
import {
	MenuList,
	HamburgerMenuList,
} from 'Components/MenuList';
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

export default Header;
