/* global navigator */
import React, { Component } from 'react';
import { Modal, View, Text, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { BottomBar } from '../../components';

class MapPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			region: {
				latitude: 0,
				longitude: 0,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			},
			currentPosd: false,
			modalVisible: false
		};

		this.onRegionChange = this.onRegionChange.bind(this);
	}

	componentDidMount() {
		const positionOption = { timeout: 500, enableHighAccuracy: true };
		navigator.geolocation.getCurrentPosition((d) => {
			this.setState({
				region: {
					latitude: d.coords.latitude,
					longitude: d.coords.longitude,
					latitudeDelta: this.state.region.latitudeDelta,
					longitudeDelta: this.state.region.longitudeDelta,
				}
			});
		}, () => { console.log('Error'); }, positionOption);
	}

	onRegionChange(region) {
		if (this.state.currentPosd) {
			this.setState({
				region
			});
		} else {
			this.setState({
				region: {
					latitude: region.latitude,
					longitude: region.longitudeDelta,
					latitudeDelta: this.state.region.latitudeDelta,
					longitudeDelta: this.state.region.longitudeDelta
				}
			});
		}
	}

	onRegionChangeComplete(region) {
		if (this.state.currentPosd) {
			this.setState({
				region
			});
		} else {
			this.setState({
				region: {
					latitude: region.latitude,
					longitude: region.longitudeDelta,
					latitudeDelta: this.state.region.latitudeDelta,
					longitudeDelta: this.state.region.longitudeDelta
				},
				currentPosd: true
			});
		}
	}

	setModalVisible(visible) {
    	this.setState({modalVisible: visible});
  	}

	render() {
		const buttons = [{
			id: 1,
			icon: 'account-circle',
			onPress: () => Actions.profile()
		}, {
			id: 2,
			icon: 'add-location',
			onPress: () => this.setModalVisible(true)
		}, {
			id: 3,
			icon: 'chat',
			onPress: () => Actions.chatRooms()
		}];

		return (
			<View style={styles.pageStyle}>
				<Modal
					animationType={"slide"}
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={() => {this.setModalVisible(false)}}
					>
					<View style={{ flex: 1, padding: 32, paddingBottom: 128 }}>
						<View style={{ flex:1, padding: 16, backgroundColor: '#ffffff', borderRadius: 4 }}>
							<Text style={ styles.modalTitleStyle }>Title</Text>
							<Text style={ styles.modalDescriptionStyle }>Description</Text>
							<View style={{ height: 56, padding: 8 }}>
								<View style={{ height: 40, flexDirection: 'row', justifyContent: 'flex-end' }}>
									<View>
										<Button
											onPress={() => {
												this.setModalVisible(false)
											}}
											title="Cancel"
										/>
									</View>
									<View style={{marginLeft:8}}>
										<Button
											onPress={() => {
												this.setModalVisible(false)
											}}
											title="Add Pin"
										/>
									</View>
								</View>
							</View>
						</View>
					</View>
				</Modal>
				<MapView
					style={styles.mapStyle}
					region={this.state.region}
					onRegionChange={(r) => { this.onRegionChange(r); }}
					onRegionChangeComplete={(r) => { this.onRegionChangeComplete(r); }}
				/>
				<BottomBar buttons={buttons} />
			</View>
		);
	}
}

const styles = {
	pageStyle: {
		flex: 1
	},
	mapStyle: {
		flex: 8
	},
	modalTitleStyle: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		textAlignVertical: 'center'
	},
	modalDescriptionStyle: {
		fontSize: 12,
		flex: 8,
		padding: 8
	}
}

export default MapPage;
