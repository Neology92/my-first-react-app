import React, { useReducer } from 'react';
import styled from 'styled-components';
import { Button } from 'Elements';

const initial = { count: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return {
				count: state.count + action.value,
			};
		case 'minus':
			return {
				count: state.count - action.value,
			};

		case 'reset':
			return {
				count: initial.count,
			};

		default:
			throw new Error();
	}
};

const Counter = ({ className }) => {
	const [state, dispatch] = useReducer(reducer, initial);

	return (
		<section className={className}>
			<h3>{state.count}</h3>
			<div className='buttons'>
				<Button
					modifiers='counter'
					onClick={() =>
						dispatch({ type: 'add', value: 10 })
					}
				>
					+ 10
				</Button>
				<Button
					modifiers='counter'
					onClick={() =>
						dispatch({ type: 'add', value: 1 })
					}
				>
					+ 1
				</Button>
				<Button
					modifiers='counter'
					onClick={() => dispatch({ type: 'reset' })}
				>
					Reset
				</Button>{' '}
				<Button
					modifiers='counter'
					onClick={() =>
						dispatch({ type: 'minus', value: 1 })
					}
				>
					- 1
				</Button>
				<Button
					modifiers='counter'
					onClick={() =>
						dispatch({ type: 'minus', value: 10 })
					}
				>
					- 10
				</Button>
			</div>
		</section>
	);
};

export default styled(Counter)`
	.buttons {
		display: flex;
		flex-direction: row;
	}
`;
