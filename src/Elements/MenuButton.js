import React from 'react';
import styled from 'styled-components';
import { above } from 'Utils';

export default class MenuButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: this.props.open ? this.props.open : false,
			color: this.props.color ? this.props.color : 'black',
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.open !== this.state.open) {
			this.setState({ open: nextProps.open });
		}
	}

	render() {
		return (
			<Container onClick={this.props.onClick}>
				<LineTop
					open={this.state.open}
					color={this.state.color}
				/>
				<LineMiddle
					open={this.state.open}
					color={this.state.color}
				/>
				<LineBottom
					open={this.state.open}
					color={this.state.color}
				/>
			</Container>
		);
	}
}

const Container = styled.div`
	cursor: pointer;
	height: 32px;
	width: 32px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 4px;

	${above.small} {
		display: none;
	}
`;

const Line = styled.div`
	height: 2px;
	width: 20px;
	background: ${props => props.color};
	transition: all 0.2s ease;
`;

const LineTop = styled(Line)`
	transform: ${props =>
		props.open ? 'rotate(45deg)' : 'none'};
	transform-origin: top left;
	margin-bottom: 5px;
`;

const LineMiddle = styled(Line)`
	opacity: ${props => (props.open ? 0 : 1)};
	transform: ${props =>
		props.open ? 'translateX(-16px)' : 'none'};
`;

const LineBottom = styled(Line)`
	transform: ${props =>
		props.open
			? 'translateX(-1px) rotate(-45deg)'
			: 'none'};
	transform-origin: top left;
	margin-top: 5px;
`;
