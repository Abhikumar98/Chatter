import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={LoginPage} />
				<Route path="/user/:userid" component={HomePage} />
				<Route component={PageNotFound} />
			</Switch>
		</Router>
	);
};

export default Routes;
