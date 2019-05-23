import React, { Fragment } from 'react';
import { Transition } from 'react-spring/renderprops';
import { Toggle } from 'Utils';
import {
	HamburgerButton,
	MenuList,
	HamburgerMenuList,
} from 'Elements';

const Menu = () => (
	<Fragment>
		<Toggle>
			{({ on, toggle }) => (
				<Fragment>
					<HamburgerButton
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
	</Fragment>
);

export default Menu;
