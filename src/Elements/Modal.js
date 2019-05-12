import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-spring/renderprops';
import Icon from './Icon';
import { Card } from './Card';
import { Portal, absolute } from 'Utils';

export default class Modal extends Component {
  render() {

    const { children, toggle, on } = this.props;

    return (
      <Portal>
        <Transition
          items={on}
          unique={true}          
          from={{opacity: 0, bgOpacity: 0, y: -100,}}
          enter={{opacity: 1, bgOpacity: 0.7, y: 0,}}
          leave={{opacity: 0, bgOpacity: 0, y: -100,}}
        >
        
          { on => on && (
            props => (
              <ModalWrapper>
                <ModalCard style={{
                    opacity: props.opacity,
                    transform: `translate3d(0,${props.y}px,0)`,
                }}>
                  {children}
                  <CloseButton onClick={toggle}>
                    <Icon name="close" color="white"/>
                  </CloseButton>
                </ModalCard>
                <Background 
                  onClick={toggle} 
                  style={{opacity: props.bgOpacity}}
                />
              </ModalWrapper>
            )
          )}

        </Transition>
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
  justify-content: center;
`;

const CloseButton = styled.button`
  ${absolute({x:'right'})}
  border: none;
  background: transparent;
  padding: 15px;
  cursor: pointer;
`;

const ModalCard = styled(Card)`
  position: relative;
  z-index: 10;
`;

const Background = styled.div`
  ${absolute({})}
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`;