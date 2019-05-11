import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Toggle } from 'Utils';
import { Modal } from 'Elements';
import { HeaderWrapper, Logo } from './style';
import logo from 'logo.png';


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