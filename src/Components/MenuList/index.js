import React from 'react';
import { MenuDesktopView, MenuMobileView } from './style';
import { MenuOptions } from 'Elements';

export const MenuList = () => (
	<MenuDesktopView>
		<MenuOptions />
	</MenuDesktopView>
);

export const HamburgerMenuList = props => (
	<MenuMobileView style={props}>
		<MenuOptions />
	</MenuMobileView>
);
