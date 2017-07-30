/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Navbar, Form } from '../../components';

class LoginPage extends Component {
	render() {
		const { imageWrapperStyle, imageStyle } = styles;
		const handlers = [{
			title: 'Log In',
			backgroundColor: '#59D988',
			onPress: () => {
				Actions.map();
			}
		}, {
			title: 'Sign In',
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
			onChange: (password) => this.setState({ password })
		}];
		return (
				<View>
					<Navbar
						navbarColor='#59D988'
						title='Login'
					/>
					<View style={imageWrapperStyle}>
						<Image
							style={imageStyle}
							source={require('../../assets/ecolocateLogo.png')}
						/>
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
	}
};

export default LoginPage;
