import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { MapPage, ChatPage, ChatRoomsPage, ProfilePage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene
			key='map'
			component={MapPage}
		/>
		<Scene
			key='chatRooms'
			component={ChatRoomsPage}
		/>
		<Scene
			key='profile'
			component={ProfilePage}
		/>
		<Scene
			key='chat'
			component={ChatPage}
			style={styles.sceneStyle}
		/>
	</Router>
);

const styles = {
	sceneStyle: {
		paddingTop: 24
	}
};

export default RouterComponent;
