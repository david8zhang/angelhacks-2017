import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { MapPage, ChatPage, ChatRoomsPage, ProfilePage } from './pages';

const Device = require('react-native-device-detection');

const { isAndroid } = Device;

const styles = {
	sceneStyle: {
		paddingTop: 24
	}
};

const chatStyle = isAndroid ? styles.sceneStyle : {};

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
			style={chatStyle}
		/>
	</Router>
);

export default RouterComponent;
