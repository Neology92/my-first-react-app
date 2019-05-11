import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import Modal from '../Modal';
import Toggle from '../Toggle';
import { HeaderWrapper, Logo } from './style';


const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} className="App-logo" alt="logo" />  
      </Link>

      <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              { on &&
                <Modal toggle={toggle} on={on}> 
                  <h1>That's in Modal</h1>
                </Modal>
              }
            </Fragment>
          )}
      </Toggle>

    </HeaderWrapper>
  )
}

export default Header;