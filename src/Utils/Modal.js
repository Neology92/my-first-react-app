import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from './Portal';
import Icon from './Icon';


export default class Modal extends Component {
  render() {

    const { children, toggle } = this.props;

    return (
      <Portal>
        <ModalWrapper>
          <Card>
            {children}
            <CloseButton onClick={toggle}>
              <Icon name="close" color="white"/>
            </CloseButton>
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

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 15px;
  cursor: pointer;
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