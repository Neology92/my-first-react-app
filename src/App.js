import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import MoviesList from './Components/MoviesGrid';
import MovieDetails from './Components/MovieDetails';
import Testing from './Components/TestingGround';
import Footer from './Components/Footer';
import { AppWrapper, Section } from './AppStyle.js';

const App = () => (
	<Router>
		<AppWrapper>
			<Header />

			<Section>
				<Switch>
					<Route exact path='/' component={MoviesList} />
					<Route path='/testing-ground' component={Testing} />
					<Route path='/:id' component={MovieDetails} />
				</Switch>
			</Section>

			<Footer />
		</AppWrapper>
	</Router>
);

export default App;
