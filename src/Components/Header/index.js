import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-spring/renderprops';
import { Toggle } from 'Utils';
import { Modal, MenuButton } from 'Elements';
import { HeaderWrapper, Logo, Menu, BurgerMenu } from './style';
import logo from 'logo.png';

const Header = () => {
	//? React hooks
	//TODO: States to control menu  in mobile view

	return (
		<HeaderWrapper>
			<Link to='/'>
				<Logo src={logo} className='App-logo' alt='logo' />
			</Link>
			<MenuButton />
			{/*// TODO: mobile menu */}
			<Menu>
				<Toggle>
					{({ on, toggle }) => (
						<Fragment>
							<Transition
								unique
								items={on}
								from={{ opacity: 0 }}
								enter={{ opacity: 1 }}
								leave={{ opacity: 0 }}
							>
								{on => on && Showme}
							</Transition>
							<button onClick={toggle}>Show/Hide</button>
						</Fragment>
					)}
				</Toggle>
				<button>
					<Link to='/testing-ground'>Tests</Link>
				</button>
				<Toggle>
					{({ on, toggle }) => (
						<Fragment>
							<button onClick={toggle}>Login</button>
							<Modal toggle={toggle} on={on}>
								<h1>That's in Modal</h1>
							</Modal>
						</Fragment>
					)}
				</Toggle>
			</Menu>
		</HeaderWrapper>
	);
};

const Showme = props => (
	<p
		style={{
			opacity: props.opacity,
			'font-size': '1.4rem',
		}}
	>
		Show me!
	</p>
);

export default Header;
