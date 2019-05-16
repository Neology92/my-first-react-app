import React from 'react';
import styled from 'styled-components';
import { darkBackground } from 'Utils';

const Footer = () => {
	return (
		<FooterWrap>
			<div> Movies from https://www.themoviedb.org </div>
			<div> Copyright 2019 Neology</div>
			<div> That's all...</div>
		</FooterWrap>
	);
};

const FooterWrap = styled.div`
	margin-top: 7rem;
	height: 100px;
	width: 100%;
	background-color: ${darkBackground};
	border-top: 1px solid rgb(119, 119, 119);
	color: rgb(119, 119, 119);
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	font-size: 1rem;

	> div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
`;

export default Footer;
