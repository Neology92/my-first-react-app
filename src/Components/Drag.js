import React, { Component } from 'react';
import styled from 'styled-components';
import { Gesture } from 'react-with-gesture';
import {
	Spring,
	animated,
	interpolate,
} from 'react-spring/renderprops';
import { Card } from 'Elements';

const AnimCard = Card.withComponent(animated.div);

const Shadow = styled(animated.div)`
	position: relative;
	width: 250px;
	height: 300px;
`;

const DragCard = styled(AnimCard)`
	position: absolute;
	height: 300px;
	padding: 0;
`;

export default class Drag extends Component {
	render() {
		return (
			<Gesture>
				{({ down, delta: [dx, dy] }) => (
					<Spring
						native
						immediate={bool => down && bool}
						to={{
							x: down ? dx : 0,
						}}
					>
						{({ x }) => (
							<Shadow
								style={{
									'background-color': x.interpolate({
										range: [-1, 1],
										output: ['#ca040a', '#20d700'],
										extrapolate: 'clamp',
									}),
								}}
							>
								<DragCard
									style={{
										opacity: x.interpolate({
											range: [-400, -200, 200, 400],
											output: [0, 1, 1, 0],
											extrapolate: 'clamp',
										}),
										transform: interpolate(
											[
												x,
												x.interpolate({
													range: [-300, 300],
													output: [-45, 45],
												}),
											],
											(x, rotate) =>
												`translate3d(${x}px, 0, 0) rotate(${rotate}deg)`
										),
									}}
								>
									<h1>Move me!</h1>
								</DragCard>
							</Shadow>
						)}
					</Spring>
				)}
			</Gesture>
		);
	}
}
