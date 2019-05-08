import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import Modal from '../Modal/index';
import Toggle from '../Toggle/index';
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
              <button onClick={ () => toggle() }>Click</button>
              { on &&
                <Modal> 
                  <h1>That's in Modal</h1>
                  <button onClick={ () => toggle() }>Yep</button>
                </Modal>
              }
            </Fragment>
          )}
      </Toggle>

    </HeaderWrapper>
  )
}

export default Header;