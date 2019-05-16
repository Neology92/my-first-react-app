import React, { Component } from 'react';
import styled from 'styled-components';
import Drag from 'Components/Drag';

export default class TestingGround extends Component {
	render() {
		return (
			<Container>
				<Drag />
			</Container>
		);
	}
}

const Container = styled.div`
	min-height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;

	& div {
		cursor: pointer;
		user-select: none;
	}
`;
