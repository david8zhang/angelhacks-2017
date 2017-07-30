import React, { Component } from 'react';
import { Button, CheckBox } from 'react-native-elements';
import { TextInput, View, ScrollView } from 'react-native';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			...this.props.prevalues
		};
	}

	renderInputs() {
		const { inputField, textArea } = styles;
		return this.props.inputs.map((input) => {
			const {
				key,
				label,
				secureTextEntry,
				multiline,
				numberOfLines,
				type,
				onChange
			} = input;
			if (type === 'check') {
				return (
					<CheckBox
						key={key}
						checked={this.state[key]}
						onPress={() => this.setState({ [key]: !this.state[key] })}
						title={label}
					/>
				);
			}
			return (
				<TextInput
					key={key}
					placeholder={label}
					secureTextEntry={secureTextEntry}
					style={multiline ? textArea : inputField}
					value={this.state[key]}
					multiline={multiline}
					numberOfLines={numberOfLines}
					onChangeText={(text) => onChange({ [key]: text })}
				/>
			);
		});
	}

	renderHandlers() {
		const { buttonStyle } = styles;
		return this.props.handlers.map((handler) => {
			const { onPress, title, backgroundColor } = handler;
			return (
				<Button
					key={title}
					buttonStyle={buttonStyle}
					backgroundColor={backgroundColor}
					title={title}
					onPress={() => onPress(this.state)}
				/>
			);
		});
	}

	render() {
		return (
			<ScrollView>
				{ this.renderInputs() }
				{ this.props.hasButtons && this.renderHandlers() }
			</ScrollView>
		);
	}
}

const styles = {
	inputLabel: {
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
		paddingLeft: 5,
		color: '#3B5998',
		fontSize: 15
	},
	inputField: {
		height: 40,
		marginLeft: 20,
		marginRight: 20,
		paddingLeft: 5,
		paddingRight: 5
	},
	textArea: {
		paddingTop: 20,
		paddingBottom: 20,
		marginLeft: 25,
		marginRight: 25
	},
	buttonStyle: {
		marginTop: 10,
		borderRadius: 2
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingTop: 20,
	}
};

Form.defaultProps = {
	inputs: [{
		key: 'username',
		label: 'Username'
	}, {
		key: 'password',
		label: 'Password',
		secureTextEntry: true
	}]
};

export default Form;
