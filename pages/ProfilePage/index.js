import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class ProfilePage extends Component {
	render() {
		const { main, 
				headerStyle, 
				headerPos, 
				subtitle, 
				pic, 
				achievementsPos, 
				achievementsText, 
				stats, 
				statsText, 
				divider,
				bubble,
				bubblePic
		} = styles;
		return (
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
		);
	}
}

const styles = {
	main: {
		marginTop: 80,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerStyle: {
		fontSize: 30
	},
	headerPos: {
		marginTop: 10,
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
	statsText: {

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
	}
}; 

export default ProfilePage;
