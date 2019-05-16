import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import {
	Header,
	Footer,
	MoviesGrid,
	AppWrapper,
	Section,
	GlobalStyle,
	TestingGround,
} from './Layouts';
import { MovieDetails } from './Components';

const App = () => (
	<Router>
		<AppWrapper>
			<Header />

			<Section>
				<Switch>
					<Route exact path='/' component={MoviesGrid} />
					<Route
						path='/testing-ground'
						component={TestingGround}
					/>
					<Route path='/:id' component={MovieDetails} />
				</Switch>
			</Section>

			<Footer />
			<GlobalStyle />
		</AppWrapper>
	</Router>
);

export default App;
