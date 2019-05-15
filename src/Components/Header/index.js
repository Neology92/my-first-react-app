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
							from={{ opacity: 0 }}
							enter={{ opacity: 1 }}
							leave={{ opacity: 0 }}
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
