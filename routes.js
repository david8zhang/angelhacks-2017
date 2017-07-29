import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { MapPage, ChatPage, ChatRoomsPage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene
			key='map'
			component={MapPage}
		/>
		<Scene
			key='chatRooms'
			component={ChatRoomsPage}
			style={sceneStyle}
		/>
		<Scene
			key='chat'
			component={ChatPage}
		/>
	</Router>
);

const sceneStyle = { paddingTop: 24 };

export default RouterComponent;
