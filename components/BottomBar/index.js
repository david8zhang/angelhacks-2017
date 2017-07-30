import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Grid, Col } from 'react-native-elements';

class BottomBar extends Component {
	getBarContent() {
		const { barStyle } = styles;

		return (
			<View style={barStyle}>
				<Grid>
					{ this.renderButtons() }
				</Grid>
			</View>
		);
	}

	renderButtons() {
		const { buttonStyle } = styles;

		return this.props.buttons.map((btn) => (
			<Col key={btn.id}>
				<Button
					key={btn.id}
					style={buttonStyle}
					buttonStyle={{ backgroundColor: 'transparent' }}
					icon={{
						name: btn.icon,
						size: 34
					}}
					textStyle={{ textAlign: 'center' }}
					onPress={() => btn.onPress()}
				/>
			</Col>
		));
	}

	render() {
		console.disableYellowBox = true;
		return (
			<View style={{flex: 1}}>
				{ this.getBarContent() }
			</View>
		);
	}
}

const styles = {
	barStyle: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#59D988',
		alignItems: 'center',
		flexWrap: 'wrap',
		alignSelf: 'center'
	}
};

export default BottomBar;
