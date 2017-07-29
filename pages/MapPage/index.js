import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MapPage extends Component {
	render() {
		const { textStyle } = styles;
		return (
			<View>
				<Text style={textStyle}>
					This one is the map page
				</Text>
			</View>
		);
	}
}

const styles = {
	textStyle: {
		margin: 100
	}
};

export default MapPage;
