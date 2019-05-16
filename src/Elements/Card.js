import styled from 'styled-components';
import { fontColor, shadows } from 'Utils';

export const Card = styled.div`
	${shadows[1]};
	border: 2px solid white;
	background-color: #1c1e20;
	color: ${fontColor};
	min-width: 250px;
	max-width: 350px;
	padding: 15px;

	&:hover {
		${shadows[3]};
	}
`;
