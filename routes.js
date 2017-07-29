import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
<<<<<<< HEAD
import { HomePage, ChatRoomsPage } from './pages';
=======
import { ChatPage } from './pages';
>>>>>>> f74a31b0d95cb3e7fac566cfd22a795b8c1daa35

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene
<<<<<<< HEAD
			key='home'
			component={HomePage}
			title='Home'
=======
			key='chat'
			component={ChatPage}
>>>>>>> f74a31b0d95cb3e7fac566cfd22a795b8c1daa35
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
