import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from '../Portal/index';


export default class Modal extends Component {
  render() {

    const { children, toggle } = this.props;

    return (
      <Portal>
        <ModalWrapper>
          <Card>
            {children}
            <Button onClick={toggle}>x</Button>
          </Card>
          <Background onClick={toggle}/>
        </ModalWrapper>
      </Portal>
    )
  }
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;

`;

const Card  = styled.div`
  position: relative;
  border: 2px solid white;
  background-color: #1c1e20;
  color: red;
  min-width: 250px;
  padding: 15px;
  z-index: 10;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`;