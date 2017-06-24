import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { HomePage } from './pages';

const RouterComponent = () => (
	<Router>
		<Scene 
			key='home'
			component={HomePage}
			title='Home'
		/>
	</Router>
);

export default RouterComponent;
