import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
// import '../_mockLocation';

const TrackCreateScreen = () => {
  const [err, setError] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      // await watchPositionAsync({
      //   accuracy: Accuracy.BestForNavigation,
      //   timeInterval: 1000,
      //   distanceInterval: 10
      // }, (location) => console.log(location));
    } catch(e) {
      setError(e);
    }
  };

  useEffect(() => {
    startWatching();
  },[])

  return (
    <SafeAreaView>
      <Text h1>Track Create Screen</Text>
      <Map />
      { err ? <Text>Please enable location services</Text> : null }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;