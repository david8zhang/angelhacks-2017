import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { HomePage, MapPage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene
			key='map'
			component={MapPage}
		/>
	</Router>
);

export default RouterComponent;
