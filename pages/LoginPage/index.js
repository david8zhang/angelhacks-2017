/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Navbar, Form } from '../../components';

class LoginPage extends Component {

	render() {
		const { imageWrapperStyle, imageStyle, logoStyle, navbarStyle } = styles;
		const handlers = [{
			title: 'log in',
			backgroundColor: '#59D988',
			onPress: () => {
				Actions.map();
			}
		}, {
			title: 'sign up',
			backgroundColor: '#acecc3',
			onPress: () => {
				Actions.map();
			}
		}];
		const inputs = [{
			key: 'username',
			label: 'username',
			onChange: (username) => this.setState({ username })
		}, {
			key: 'password',
			label: 'password',
			secureTextEntry: true,
			onChange: (password) => this.setState({ password })
		}];
		return (
				<View>
					<View style={imageWrapperStyle}>
						<Image
							style={imageStyle}
							source={require('../../assets/ecolocateLogo.png')}
						/>
					</View>
					<View>
						<Text style= {logoStyle}>ecolocate</Text>
					</View>
					<Form 
						hasButtons 
						handlers={handlers}
						inputs={inputs}
					/>
				</View>
		);
	}
}

const styles = {
	imageStyle: {
		height: 200,
		width: 200,
		resizeMode: 'contain',
	},
	imageWrapperStyle: {
		alignItems: 'center'
	},
	logoStyle: {
		fontSize: 60,
		alignSelf: 'center',
		marginBottom: 10
	}
};

export default LoginPage;
