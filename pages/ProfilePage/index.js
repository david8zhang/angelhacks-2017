import React, { Component } from 'react';
import { Alert, Modal, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { BottomBar } from '../../components';
import { Actions } from 'react-native-router-flux';

class ProfilePage extends Component {

	constructor() {
		super();
		this.state = {
			modalVisible: false,
			modalText: 'Modal Text',
			modalImage: null
		};
	}

	_onPressButton(symbolName) {
		const { modalImageStyle } = styles;
		let text = 'Modal Text';
		let image = null;
		switch(symbolName) {
			case 'singlePin':
				text = 'Dropped first pin';
				image = (
					<Image
		    			source={require('../../assets/icons/singlePin.png')}
		    			style={modalImageStyle}
		    		/>
				);
				break;
			case 'singleGroup':
				text = 'Joined first group';
				image = (
					<Image
		    			source={require('../../assets/icons/singleGroup.png')}
		    			style={modalImageStyle}
		    		/>
				);
				break;
			case 'singleTrash':
				text = 'Completed first cleanup';
				image = (
					<Image
		    			source={require('../../assets/icons/singleTrash.png')}
		    			style={modalImageStyle}
		    		/>
				);
				break;
			case 'multiPin':
				text = 'Dropped 10 pins';
				image = (
					<Image
		    			source={require('../../assets/icons/multiPin.png')}
		    			style={modalImageStyle}
		    		/>
				);
				break;
			case 'multiGroup':
				text = 'Joined 10 groups';
				image = (
					<Image
		    			source={require('../../assets/icons/multiGroup.png')}
		    			style={modalImageStyle}
		    		/>
				);
				break;
			case 'multiTrash':
				text = 'Completed 10 cleanups';
				image = (
					<Image
		    			source={require('../../assets/icons/multiTrash.png')}
		    			style={modalImageStyle}
		    		/>
				);
				break;
			default:
				text = 'Modal Text';
		}
		this.setState({modalVisible: true, modalText: text, modalImage: image});
	}

	closeModal() {
		this.setState({modalVisible: false});
	}

	renderAchievements() {
		const { stats, bubble, bubblePic } = styles;
		return (
			<View style={stats}>
				<TouchableOpacity onPress={() => {this._onPressButton('singlePin')}} underlayColor='#59D988'>
					<View style={bubble}>
						<Image 
							source={require('../../assets/icons/singlePin.png')}
							style={bubblePic}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this._onPressButton('singleGroup')}} underlayColor='#59D988'>
					<View style={bubble}>
						<Image
							source={require('../../assets/icons/singleGroup.png')}
							style={bubblePic}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this._onPressButton('singleTrash')}} underlayColor='#59D988'>
					<View style={bubble}>
						<Image
							source={require('../../assets/icons/singleTrash.png')}
							style={bubblePic}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this._onPressButton('multiPin')}} underlayColor='#59D988'>
					<View style={bubble}>
						<Image
							source={require('../../assets/icons/multiPin.png')}
							style={bubblePic}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this._onPressButton('multiGroup')}} underlayColor='#59D988'>
					<View style={bubble}>
						<Image
							source={require('../../assets/icons/multiGroup.png')}
							style={bubblePic}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {this._onPressButton('multiTrash')}} underlayColor='#59D988'>
					<View style={bubble}>
						<Image
							source={require('../../assets/icons/multiTrash.png')}
							style={bubblePic}
						/>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	render() {
		const buttons = [{
			id: 1,
			icon: 'account-circle',
			onPress: () => Actions.profile(),
			size: 34,
			color: '#acecc3',
            iconColor: 'white'
		}, {
			id: 2,
			icon: 'map',
			onPress: () => Actions.map(),
			size: 34,
			color: '#59D988',
			iconColor: 'white'
		}, {
			id: 3,
			icon: 'chat',
			onPress: () => Actions.chatRooms(),
			size: 34,
			color: '#59D988',
			iconColor: 'white'
		}];
		const {
			outerFlex,
			main, 
			headerStyle,  
			subtitle, 
			pic, 
			achievementsPos, 
			achievementsText,
			stats,  
			divider,
			bottomBar,
			modalStyle,
			modalTextStyle,
			closeButton,
			modalImageContainer
		} = styles;
		return (
			<View style={outerFlex}>
				<View style={main}>
					<View>
						<Image
							source={require('../../assets/icons/defaultProfile.png')}
							style={pic}
						/>
					</View>
					<View>
						<Text style={headerStyle}>
							Randeep Bhatia
						</Text>
						<Text style={subtitle}>
							Member since 1 month ago
						</Text>
					</View>
					<View style={divider}></View>
					<Modal
						animationType={"slide"}
				        transparent={true}
						visible={this.state.modalVisible}
				    >
				    	<View style={modalStyle}>
				    		<View style={modalImageContainer}>
				    			{this.state.modalImage}
				    		</View>
				    		<Text style={modalTextStyle}>{this.state.modalText}</Text>
				    		<Button
				    			title={"Close"}
				    			onPress={() => {this.closeModal()}}
				    			style={closeButton}
				    			color={'#59D988'}
				    		/>
				    	</View>
				    </Modal>
					<View style={achievementsPos}>
						<Text style={achievementsText}>
							Achievements
						</Text>
					</View>
					{ this.renderAchievements() }
				</View>
				<BottomBar buttons={buttons} />
			</View>
		);
	}
} 

const styles = {
	outerFlex: {
		flex: 1
	},
	main: {
		flex: 8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerStyle: {
		fontSize: 30
	},
	subtitle: {
		alignSelf: 'center'
	},
	pic: {
		width: 120,
		height: 120,
		borderRadius: 60
	},
	divider: {
		width: 300,
		height: 2,
		marginTop: 15,
		backgroundColor: '#acecc3'
	},
	achievementsText: {
		fontSize: 25
	},
	achievementsPos: {
		marginTop: 30
	},
	stats: {
		width: 300,
		height: 200,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	bubble: {
		backgroundColor: '#acecc3',
		width: 80,
		height: 80,
		borderRadius: 40,
		marginTop: 20,
		marginLeft: 10,
		marginRight: 10
	},
	bubblePic: {
		marginTop: 15,
		alignSelf: 'center',
		width: 50,
		height: 50
	},
	modalStyle: {
		width: 300,
		height: 300,
		backgroundColor: 'white',
		alignSelf: 'center',
		marginTop: 170,
		borderColor: '#59D988',
		borderRadius: 2,
		borderWidth: 1
	},
	modalTextStyle: {
		flex: 4,
		fontSize: 30,
		alignSelf: 'center',
		textAlign: 'center',
		flexDirection: 'column',
		marginLeft: 5,
		marginRight: 5
	},
	modalImageStyle: {
		flex: 4,
		flexDirection: 'column',
		width: 60,
		height: 60,
		alignSelf: 'center',
		marginTop: 20,
		marginBottom: 20
	},
	closeButton: {
		flex: 1,
		flexDirection: 'column'
	},
	modalImageContainer: {
		backgroundColor: '#acecc3',
		width: 100,
		height: 100,
		borderRadius: 50,
		flexDirection: 'column',
		alignSelf: 'center',
		marginTop: 70,
		marginBottom: 5
	}
};

export default ProfilePage;
