import styled from 'styled-components';
import { darkBackground, borderColor } from 'Utils';

export const HeaderWrapper = styled.div`
	padding: 0 5vw;
	height: 10vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-size: calc(10px + 2vmin);
	color: white;
	background-color: ${darkBackground};
	border: solid 1px ${borderColor};
`;

export const Logo = styled.img`
	height: 4rem;
	color: white;
	pointer-events: none;
`;
