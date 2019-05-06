import styled from 'styled-components';


export const AppWrapper = styled.div`
  text-align: center;
  min-height: 100vh;
  background-color: #2a2d36;
  overflow: hidden;
`;

export const Header = styled.div`
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  background-color: #1c1e20;
  border-bottom: 1px solid rgb(119, 119, 119);
`;

export const Logo = styled.img`
  height: 6vh;
  color: white;
  pointer-events: none;
`;

export const Section = styled.section`
  min-height:calc(90vh - 102px);
`;