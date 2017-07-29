import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { ChatPage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene
			key='chat'
			component={ChatPage}
		/>
	</Router>
);

export default RouterComponent;
