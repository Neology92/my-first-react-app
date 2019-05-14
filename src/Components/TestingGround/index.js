import React, { Component } from 'react';
import { Container } from './style';
import Drag from 'Components/Drag';

export default class Testing extends Component {
	render() {
		return (
			<Container>
				<Drag />
			</Container>
		);
	}
}
