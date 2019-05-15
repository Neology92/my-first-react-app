import styled from 'styled-components';
import { below, above, absolute, colors } from 'Utils';

export const Menu = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 50px;
	min-width: 50px;
	& > * {
		margin: 10px;
		height: 20%;
		padding: 10px;
		box-sizing: border-box;
	}
`;

export const MenuDesktopView = styled(Menu)`
	${below.small} {
		display: none;
	}
`;

export const MenuMobileView = styled(Menu)`
	${below.small} {
		flex-direction: column;
		justify-content: space-around;
		${absolute({})}
		top: calc(10vh + 2px);
		width: 100%;
		height: 50vh;
		background-color: ${colors.darkBackground};
		z-index: 2;
	}

	${above.small} {
		display: none;
	}
`;
