import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
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
			currentPosd: false
		}

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
		}, () => { console.log('Error') }, positionOption);
	}

	onRegionChange(region) {
		if (this.state.currentPosd) {
			this.setState({
				region
			});
		}
		else {
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
		}
		else {
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
		const styles = {
			pageStyle: {
				flex: 1
			},
			mapStyle: {
				flex: 8
			}
		}

		return (
			<View style={ styles.pageStyle }>
				<MapView
					style={styles.mapStyle}
					region={this.state.region}
					onRegionChange={ (r) => { this.onRegionChange(r) }}
					onRegionChangeComplete={ (r) => { this.onRegionChangeComplete(r) }}
				/>
				<BottomBar
					barType='map'
				/>
			</View>
		);
	}
}



export default MapPage;
