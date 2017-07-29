import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { HomePage, MapPage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene
			key='map'
			component={MapPage}
			style={sceneStyle}
		/>
	</Router>
);

const sceneStyle = {
	paddingTop: 24
};

export default RouterComponent;
