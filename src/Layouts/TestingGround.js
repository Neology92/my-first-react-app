import React from 'react';
import styled from 'styled-components';
import {
	Drag,
	TestForm,
	Counter,
	ShowModal,
} from 'Components';

const TestingGround = ({ className }) => (
	<section className={className}>
		<Drag />
		<TestForm />
		<Counter />
		<ShowModal />
	</section>
);

export default styled(TestingGround)`
	min-height: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& div {
		cursor: pointer;
		user-select: none;
	}
`;
