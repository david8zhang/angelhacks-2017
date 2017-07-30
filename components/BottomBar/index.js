import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

class BottomBar extends Component {
	getBarContent() {
		const { barStyle } = styles;

		return (
			<View style={barStyle}>
				{ this.renderButtons() }
			</View>
		);
	}

	renderButtons() {
		const { buttonStyle } = styles;

		return this.props.buttons.map((btn) => (
			<Button
				key={btn.id}
				style={buttonStyle}
				buttonStyle={{ backgroundColor: 'transparent' }}
				icon={{
					name: btn.icon,
					size: 24
				}}
				textStyle={{ textAlign: 'center' }}
				onPress={() => btn.onPress()}
			/>
		));
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				{ this.getBarContent() }
			</View>
		);
	}
} 

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

export default BottomBar;
