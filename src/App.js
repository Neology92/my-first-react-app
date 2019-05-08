import React from 'react';
import{
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Components/Header/index';
import MoviesList from './Components/MoviesGrid/index';
import MovieDetails from './Components/MovieDetails/index';
import Footer from './Components/Footer/index';
import {
  AppWrapper,
  Section,
} from './AppStyle.js';


const App = () => (
    <Router>
      <AppWrapper>
        <Header/>

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
