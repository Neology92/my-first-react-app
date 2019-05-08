import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo } from './style';
import logo from '../../logo.png';
import Toggle from '../Toggle/index';
import Portal from '../Portal/index';


const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} className="App-logo" alt="logo" />  
      </Link>
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            <Portal>
              { on && <nav> HI A AM TOGGLE-MANU </nav> }
            </Portal>
            <button onClick={toggle}>Show/Hide</button>
          </Fragment>
        )}
      </Toggle>
    </HeaderWrapper>
  )
}

export default Header;