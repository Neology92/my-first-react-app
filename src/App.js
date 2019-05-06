import React from 'react';
import logo from './logo.png';
import MoviesList from './Components/MoviesGrid/index';
import MovieDetails from './Components/MovieDetails/index';
import Footer from './Components/Footer/index';
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import {
  AppWrapper,
  Header,
  Logo,
  Section,
} from './AppStyle.js';


const App = () => (
    <Router>
      <AppWrapper>
        <Header>
          <Link to="/">
            <Logo src={logo} className="App-logo" alt="logo" />  
          </Link>
        </Header>

        <Section>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/:id" component={MovieDetails} />
          </Switch>
        </Section>

        <Footer />
      </AppWrapper>
    </Router>
);

export default App;
