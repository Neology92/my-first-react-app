import styled from 'styled-components';
import { background } from 'Utils';

export const AppWrapper = styled.div`
	text-align: center;
	min-height: 100vh;
	background-color: ${background};
	overflow: hidden;
`;

export const Section = styled.section`
	min-height: calc(90vh - 102px);
`;
