import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends React.Component {

	state = {
		mapRegion: null,
		lastLat: null,
		lastLong: null,
	}

	componentDidMount() {
		this.watchID = navigator.geolocation.watchPosition((position) => {
		// Create the object to update this.state.mapRegion through the onRegionChange function
			let region = {
				latitude:       position.coords.latitude,
				longitude:      position.coords.longitude,
				latitudeDelta:  0.00922*1.5,
				longitudeDelta: 0.00421*1.5
			}
			this.onRegionChange(region, region.latitude, region.longitude);
		});
	}

	onRegionChange(region, lastLat, lastLong) {
		this.setState({
			mapRegion: region,
			// If there are no new values set the current ones
			lastLat: lastLat || this.state.lastLat,
			lastLong: lastLong || this.state.lastLong
		});
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}

	render () {
		return (
			<MapView
				style = { styles.mapContainer }
				region = { this.state.mapRegion }
			/>
		);
	}
}

const styles = StyleSheet.create ({
	mapContainer: {
		...StyleSheet.absoluteFillObject,
	}
})