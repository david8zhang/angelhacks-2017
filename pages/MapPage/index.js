import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BottomBar } from '../../components';

class MapPage extends Component {
	render() {
		const styles = {
			pageStyle: {
				flex: 1
			},
			textStyle: {
				flex: 8
			}
		}

		return (
			<View style={ styles.pageStyle }>
				<Text style={styles.textStyle}>
					This one is the map page
				</Text>
				<BottomBar
					barType='map'
				/>
			</View>
		);
	}
}



export default MapPage;
