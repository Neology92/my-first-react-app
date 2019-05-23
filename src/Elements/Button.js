import styled from 'styled-components';

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
`;

export default Button;
