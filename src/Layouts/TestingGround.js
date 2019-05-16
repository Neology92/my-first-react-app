import React, { Component } from 'react';
import styled from 'styled-components';
import Drag from 'Components/Drag';

const TestingGround = ({ className }) => (
	<section className={className}>
		<Drag />
	</section>
);

export default styled(TestingGround)`
	min-height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;

	& div {
		cursor: pointer;
		user-select: none;
	}
`;
