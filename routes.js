import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { MapPage, ChatPage, ChatRoomsPage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene
			key='chatRooms'
			component={ChatRoomsPage}
		/>
		<Scene
			key='map'
			component={MapPage}
		/>
		<Scene
			key='chat'
			component={ChatPage}
		/>
	</Router>
);

export default RouterComponent;
