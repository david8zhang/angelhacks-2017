import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { HomePage, ChatRoomsPage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene
			key='home'
			component={HomePage}
			title='Home'
		/>
		<Scene
			key='chatRooms'
			component={ChatRoomsPage}
			style={sceneStyle}
		/>
	</Router>
);

const sceneStyle = { paddingTop: 24 };

export default RouterComponent;
