/* global navigator */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { BottomBar } from '../../components';
import * as actions from '../../actions';

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
			currentPosd: false
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

		this.props.getMarkersAction();
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

		const styles = {
			pageStyle: {
				flex: 1
			},
			mapStyle: {
				flex: 8
			}
		};

		/* for draggable
			draggable
			onDragEnd={
				(e) => {
					this.setState({ x: e.nativeEvent.coordinate });
					// TODO: UPDATE THIS IN 'DB'
				}
			}
		*/

		return (
			<View style={styles.pageStyle}>
				<MapView
					style={styles.mapStyle}
					region={this.state.region}
					onRegionChange={(r) => { this.onRegionChange(r); }}
					onRegionChangeComplete={(r) => { this.onRegionChangeComplete(r); }}
				>
					{
						this.props.markers.map((marker) => {
							const buttonTitle = (marker.joined) ? 'GO TO CHAT' : 'JOIN THIS GROUP';
							return (
								<MapView.Marker
									key={marker.id}
									coordinate={marker.latlng}
									title={marker.title}
									description={marker.description}
								>
									<MapView.Callout>
										<Text>
											{ marker.title }
										</Text>
										<Text>
											{ marker.description }
										</Text>
										<Button
											key={0}
											buttonStyle={{ backgroundColor: '#000000' }}
											title={buttonTitle}
											textStyle={{ textAlign: 'center' }}
											onPress={() => {
												const room = {
													name: marker.title,
													description: marker.description,
													img: 'https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/f49/c0/lamsaucelocated.jpg'
												};
												if (!marker.joined) {
													// TODO: CHANGE THE BUTTON TEXT / GET RID IF THIS
													this.props.joinRoomAction(room);
													this.props.updateMarkerAction({
														...marker,
														joined: true
													});
												}
												else {
													// TODO: GO TO (specific) CHAT ROOM
													Actions.chat();
												}
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
		markers: state.markers
	};
}

export default connect(mapStateToProps, actions)(MapPage);
