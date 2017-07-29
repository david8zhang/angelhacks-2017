import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { ProfilePage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene
			key='profile'
			component={ProfilePage}
		/>
	</Router>
);

export default RouterComponent;
