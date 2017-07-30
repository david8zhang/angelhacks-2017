import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Navbar, Form } from '../../components';

class LoginPage extends Component {
	render() {
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
		height: 300,
		width: 300,
		resizeMode: 'contain',
	},
	imageWrapperStyle: {
		alignItems: 'center'
	}
};

export default LoginPage;
