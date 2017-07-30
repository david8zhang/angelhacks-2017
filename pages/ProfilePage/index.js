import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { BottomBar } from '../../components';
import { Actions } from 'react-native-router-flux';

class ProfilePage extends Component {
	render() {
		const buttons = [{
			id: 1,
			icon: 'account-circle',
			onPress: () => Actions.profile()
		}, {
			id: 2,
			icon: 'add-location',
			onPress: () => Actions.map()
		}, {
			id: 3,
			icon: 'chat',
			onPress: () => Actions.chatRooms()
		}];
		const {
			outerFlex,
			main, 
			headerStyle, 
			headerPos, 
			subtitle, 
			pic, 
			achievementsPos, 
			achievementsText,
			stats,  
			divider,
			bubble,
			bubblePic,
			bottomBar
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
					<View style={headerPos}>
						<Text style={headerStyle}>
							Randeep Bhatia
						</Text>
						<Text style={subtitle}>
							Member since 1 month ago
						</Text>
					</View>
					<View style={divider}></View>
					<View style={achievementsPos}>
						<Text style={achievementsText}>
							Achievements
						</Text>
					</View>
					<View style={stats}>
						<View style={bubble}>
							<Image 
								source={require('../../assets/icons/singlePin.png')}
								style={bubblePic}
							/>
						</View>
						<View style={bubble}>
							<Image
								source={require('../../assets/icons/singleGroup.png')}
								style={bubblePic}
							/>
						</View>
						<View style={bubble}>
							<Image
								source={require('../../assets/icons/singleTrash.png')}
								style={bubblePic}
							/>
						</View>
						<View style={bubble}>
							<Image
								source={require('../../assets/icons/multiPin.png')}
								style={bubblePic}
							/>
						</View>
						<View style={bubble}>
							<Image
								source={require('../../assets/icons/multiGroup.png')}
								style={bubblePic}
							/>
						</View>
						<View style={bubble}>
							<Image
								source={require('../../assets/icons/multiTrash.png')}
								style={bubblePic}
							/>
						</View>
					</View>
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
	headerPos: {
		
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
};

export default ProfilePage;
