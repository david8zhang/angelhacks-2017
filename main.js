import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Router from './routes';
import reducers from './reducers';

class App extends React.Component {
	render() {
		const store = createStore(reducers);

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

Expo.registerRootComponent(App);
