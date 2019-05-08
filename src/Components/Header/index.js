import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo } from './style'
import logo from '../../logo.png';
import Toggle from '../Toggle/index';


const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} className="App-logo" alt="logo" />  
      </Link>
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <button onClick={toggle}>Show/Hide</button>
            { on && <nav> HI A AM TOGGLE-MANU </nav> }
          </div>
        )}
      </Toggle>
    </HeaderWrapper>
  )
}

export default Header;