import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { ChatPage, ChatRoomsPage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene
			key='chat'
			component={ChatPage}
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
