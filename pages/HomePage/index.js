import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

class HomePage extends Component {
	render() {
		const { textStyle } = styles;
		return (
			<View>
				<Text style={textStyle}>
					Welcome to the React-Native-Redux-Expo Boilerplate!
				</Text>
				<Button
					title='Go'
					onPress={() => Actions.chatRooms()}
					backgroundColor='#39AEF8'
				/>
			</View>
		);
	}
}

const styles = {
	textStyle: {
		margin: 100
	}
};

export default HomePage;
