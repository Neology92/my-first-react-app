import React, { Component } from 'react'
import { Container } from './style.js';
import Drag from 'Components/Drag';



export default class Testing extends Component {
  render() {
    return (
      <Container>
        <Drag/>
      </Container>
    )
  }
}
