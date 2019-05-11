import styled from 'styled-components';
import { darkBackground } from 'Utils';

export const HeaderWrapper = styled.div`
padding: 0 5vw;
min-height: 10vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
font-size: calc(10px + 2vmin);
color: white;
background-color: ${darkBackground};
border-bottom: 1px solid rgb(119, 119, 119);
`;

export const Logo = styled.img`
  height: 6vh;
  color: white;
  pointer-events: none;
`;
