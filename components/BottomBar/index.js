import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'

class BottomBar extends Component {
	getBarContent() {
		// total screen height: 410? width: 375
		const styles = {
			barStyle: {
				flex: 1,
				flexDirection: 'row',
				backgroundColor: '#59D988'
			},
			buttonStyle: {
				flex: 1,
				backgroundColor: '#59D988'
			}
		};

		const { barStyle } = styles;

		return (
			<View style={barStyle}>
				<Button 
					style={ styles.buttonStyle }
					buttonStyle={{ backgroundColor: 'transparent' }}
					icon={{ 
						name: 'account-circle',
						size: 24
					}}
					textStyle={{ textAlign: 'center' }}
				/>
				<Button 
					style={ styles.buttonStyle }
					buttonStyle={{ backgroundColor: 'transparent' }}
					icon={{
						name: 'map',
						size: 24
					}}
					textStyle={{ textAlign: 'center' }}
				/>
				<Button 
					style={ styles.buttonStyle }
					buttonStyle={{ backgroundColor: 'transparent' }}
					icon={{
						name: 'chat',
						size: 24
					}}
					textStyle={{ textAlign: 'center' }}
				/>
			</View>
		);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				{ this.getBarContent() }
			</View>
		);
	}
}

export default BottomBar;
