import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

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

const Button = styled.button`
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

export default Button;
