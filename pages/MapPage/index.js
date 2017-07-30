/* global navigator */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, View, Text, Button as RNButton } from 'react-native';
import MapView from 'react-native-maps';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import * as actions from '../../actions';
import * as api from '../../actions/api';
import { BottomBar, Form } from '../../components';

const Device = require('react-native-device-detection');

class MapPage extends Component {
	constructor(props) {
		super(props);

		// TODO: ADD IN A STAGEDPIN
		this.state = {
			region: {
				latitude: 0,
				longitude: 0,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			},
			currentPosd: false,
			modalVisible: false,
			modalTitle:'',
			modalDescription:'',
			stagedPin: 	{
				id: 4,
				latlng: {
					latitude: 37.78825,
		      		longitude: -122.4324
				},
				title: 'this is a sample marker',
				description: '1 8 0 0 M A R K E D',
		        joined: false
			}
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

		api.fetchMarkers();
		this.props.getPartnersAction();
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

	onChangeTitleText(text) {
		// Do something
	}

	onChangeDescriptionText(text) {
		// Do something
	}

	joinGroup(marker) {
		const room = {
			name: marker.title,
			description: marker.description,
			img: 'https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/f49/c0/lamsaucelocated.jpg'
		};
		if (!marker.joined) {
			this.props.joinRoomAction(room);
			this.props.updateMarkerAction({
				...marker,
				joined: true
			});
		} else {
			// TODO: GO TO (specific) CHAT ROOM
			Actions.chat();
		}
	}

	confirmMarker(marker) {
		this.setState({
			stagedPin: {
				id: 4,
				latlng: {
					latitude: 37.78825,
						longitude: -122.4324
				},
				title: 'Sample Marker',
				description: '1 8 0 0 M A R K E D',
				joined: false
			}
		});
		marker.id = Date.now().toString();
		api.createMarker(marker);
	}

	render() {
		const { isAndroid, isIos } = Device;
		const buttons = [{
			id: 1,
			icon: 'account-circle',
			onPress: () => Actions.profile(),
			size: 34,
			color: '#59D988',
			iconColor: 'white'
		}, {
			id: 2,
			icon: 'add-location',
			onPress: () => this.setModalVisible(true),
			size: 54,
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
							<Form
								inputs={[{
									key: 'title',
									label: 'Title',
									onChange: (modalTitle) => this.setState({ modalTitle })
								}, {
									key: 'description',
									label: 'Description',
									multiline: true,
									numberOfLines: 8,
									onChange: (modalDescription) => this.setState({ modalDescription })
							}]}/>
							<View style={{ height: 40, flexDirection: 'row', justifyContent: 'flex-end' }}>
								<View>
									<RNButton
										onPress={() => {this.setModalVisible(false)}}
	 									title="Cancel"
	 									color={'#59D988'}
	 								/>
	 							</View>
								<View style={{marginLeft:8}}>
									<RNButton
										onPress={() => {
											this.setModalVisible(false);
											this.setState({
												stagedPin: {
													id: -1,
													latlng: {
														latitude: this.state.region.latitude,
											      		longitude: this.state.region.longitude
													},
													title: this.state.modalTitle.title,
													description: this.state.modalDescription.description,
											        joined: false
												}
											});
										}}
										title="Add Pin"
										color={'#59D988'}
									/>
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
				>
					{
						this.props.markers.map((marker) => {
							const buttonTitle = (marker.joined) ? 'GO TO CHAT' : 'JOIN THIS GROUP';
							const buttonColor = (marker.joined) ? '#59D988' : '#acecc3';
							return (
								<MapView.Marker
									key={marker.id}
									coordinate={marker.latlng}
									title={marker.title}
									description={marker.description}
									pinColor='#59D988'
								>
									<MapView.Callout 
										onPress={() => {
											if (isAndroid) {
												this.joinGroup(marker);
											}
										}}
									>
										<Text style={ styles.calloutTitle }>
											{ marker.title }
										</Text>
										<Text style={ styles.calloutText }>
											{ marker.description }
										</Text>
										<Button
											key={0}
											buttonStyle={{ backgroundColor: buttonColor, borderRadius: 2 }}
											title={buttonTitle}
											textStyle={{ textAlign: 'center' }}
											onPress={() => {
												if (isIos) {
													this.joinGroup(marker);
												}
											}}
										/>
									</MapView.Callout>
								</MapView.Marker>
							);
						})
					}
					<MapView.Marker draggable
						key={this.state.stagedPin.id}
						coordinate={this.state.stagedPin.latlng}
						title={this.state.stagedPin.title}
						description={this.state.stagedPin.description}
						onDragEnd={
							(e) => {
								this.setState({
									stagedPin: {
										...this.state.stagedPin,
										latlng: e.nativeEvent.coordinate
									}
								});
							}
						}
						pinColor='#e2934d'
					>
						<MapView.Callout onPress={() => {
							if (isAndroid) {
								this.confirmMarker(this.state.stagedPin);
							}
						}}>
							<Text style={ styles.calloutTitle }>
								{ this.state.stagedPin.title }
							</Text>
							<View style={{flexDirection: 'row'}}>
								<Text style={ styles.calloutText }>
									{ this.state.stagedPin.description }
								</Text>
							</View>
							<Button
								key={1}
								buttonStyle={{ backgroundColor: '#acecc3', borderRadius: 2 }}
								title={'CONFIRM'}
								textStyle={{ textAlign: 'center' }}
								onPress={() => {
									if (isIos) {
										this.confirmMarker(this.state.stagedPin);
									}
								}}
							/>
						</MapView.Callout>
					</MapView.Marker>
					{
						this.props.partners.map((partner) => {
							const buttonTitle = 'CHECK OUT SITE';
							return (
								<MapView.Marker
									key={partner.id}
									coordinate={partner.latlng}
									title={partner.title}
									description={partner.description}
									pinColor='#edcb23'
								>
									<MapView.Callout 
										onPress={() => {
											// TODO: GO TO THEIR SITE USING PARTNER.LINK
										}}
									>
										<Text style={ styles.calloutTitle }>
											{ partner.title }
										</Text>
										<Text style={ styles.calloutText }>
											{ partner.description }
										</Text>
										<Text style={ styles.calloutText }>
											{ partner.company }
										</Text>
										<Button
											key={0}
											buttonStyle={{ backgroundColor: '#acecc3', borderRadius: 2 }}
											title={buttonTitle}
											textStyle={{ textAlign: 'center' }}
											onPress={() => {
												// TODO: GO TO THEIR SITE USING PARTNER.LINK
											}}
										/>
									</MapView.Callout>
								</MapView.Marker>
							);
						})
					}
				</MapView>
				<BottomBar buttons={buttons} />
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		markers: state.markers,
		partners: state.partners
	};
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
		borderColor: 'gray',
		fontWeight: 'bold',
		textAlign: 'center',
		textAlignVertical: 'center'
	},
	modalDescriptionStyle: {
		fontSize: 12,
		flex: 8,
		borderColor: 'gray',
		padding: 8,
		textAlign: 'left',
		textAlignVertical: 'top'
	},
	calloutTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#59D988',
		alignSelf: 'center'
	},
	calloutText: {
		fontSize: 14,
		marginTop: 5,
		marginBottom: 10,
		numberOfLines: 8,
		justifyContent: 'center',
		flex: 1,
		flexWrap: 'wrap',
		alignSelf: 'center',
		maxWidth: 300
	}
}

export default connect(mapStateToProps, actions)(MapPage);
