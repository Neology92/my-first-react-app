import React, { Component } from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { above } from 'Utils';

const BUTTON_MODIFIERS = {
	submit: () => `
        background-color: darkgreen;
        width: 422px;
        border: 1px solid white;
    `,

	counter: () => `
        background-color: #500158;
        min-width: 70px;
		padding: 10px;
		margin: 10px;
    `,
};

export const Button = styled.button`
	padding: 5px;
	font-weight: 600;
	text-align: center;
	line-height: 50px;
	color: rgb(255, 255, 255, 0.5);
	border-radius: 5px;
	background: rgb(97, 22, 22);
	font-family: 'Josefin Slab', serif;
	font-size: 20px;
	line-height: 24px;
	cursor: pointer;
	border: none;

	&:disabled:hover {
		color: rgb(255, 255, 255, 0.5);
		cursor: default;
	}
	&:hover {
		color: #fff;
	}

	${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

/* ================================================= */

export class HamburgerButton extends Component {
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
