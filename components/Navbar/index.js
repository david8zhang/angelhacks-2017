import React, { Component } from 'react';
import { View } from 'react-native';
import NavigationBar from 'react-native-navbar';

class Navbar extends Component {
	render() {
		const { navStyle } = styles;
		const titleConfig = { 
			title: this.props.title, 
			tintColor: this.props.tintColor,
			style: { fontSize: 25 } 
		};
		return (
			<View>
				<NavigationBar
					style={navStyle}
					title={titleConfig}
					tintColor={this.props.navbarColor}
					rightButton={this.props.rightButtonConfig}
					leftButton={this.props.leftButtonConfig}
				/>
			</View>
		);
	}
}

Navbar.defaultProps = {
	title: 'Navbar',
	tintColor: '#ffffff',
	navbarColor: '#39AEF8'
};

const styles = {
	navStyle: {
		height: 60
	},
	dividerStyle: {
		paddingTop: 5,
		marginTop: 5
	}
};

export default Navbar;
