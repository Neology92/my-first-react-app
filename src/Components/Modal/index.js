import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from '../Portal/index';


export default class Modal extends Component {
  render() {
    return (
      <Portal>
        <ModalWrapper>
          {this.props.children}
        </ModalWrapper>
      </Portal>
    )
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background-color: #111;
`;