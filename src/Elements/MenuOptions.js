import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-spring/renderprops';
import { Toggle } from 'Utils';
import { Modal } from 'Elements';

const MenuOptions = () => (
	<Fragment>
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
	</Fragment>
);

const Showme = props => (
	<p
		style={{
			opacity: props.opacity,
			fontSize: '1.4rem',
		}}
	>
		Show me!
	</p>
);

export default MenuOptions;
