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
			}
		}

		this.onRegionChange = this.onRegionChange.bind(this);
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((d) => {
			this.setState({
				region: {
					latitude: d.coords.latitude,
					longitude: d.coords.longitude,
					latitudeDelta: this.state.region.latitudeDelta,
					longitudeDelta: this.state.region.longitudeDelta,
				}
			});
		});
	}

	onRegionChange(region) {
		this.setState({
			region
		});
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
					onRegionChange={ this.onRegionChange }
				/>
				<BottomBar
					barType='map'
				/>
			</View>
		);
	}
}



export default MapPage;
