import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Router from './routes';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

Expo.registerRootComponent(App);
