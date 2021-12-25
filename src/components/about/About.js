import React from 'react';
import { View, Image, Linking } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './About.style';
import Pressable from 'components/pressable/Pressable';
import { useNavigation } from '@react-navigation/core';
import VersionCheck from 'react-native-version-check';

const About = () => {
  const navigation = useNavigation();

  const privacyPolicyHandler = () => {
    Linking.openURL(
      'https://merakidev.blogspot.com/2021/12/waste-counter-app.html',
    ).catch(err => console.error('An error occurred', err));
  };

  const attributionsHandler = () => {
    navigation.push('Modal', {
      type: 'attribution',
      title: 'Attributions',
    });
  };

  const rateUsHandler = () => {
    Linking.openURL(
      'https://play.google.com/store/apps/details?id=com.epoch.wastecounter',
    ).catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('assets/images/splash.png')}
      />
      <View style={styles.appContainer}>
        <Text>Waste Counter App</Text>
        <Text>{VersionCheck.getCurrentVersion()}</Text>
      </View>
      <View style={styles.linkContainer}>
        <View style={styles.links}>
          <Pressable android_ripple={null} onPress={privacyPolicyHandler}>
            <Text style={styles.text}>Privacy Policy</Text>
          </Pressable>
          <Pressable android_ripple={null} onPress={attributionsHandler}>
            <Text style={styles.text}>Attributions</Text>
          </Pressable>
          <Pressable android_ripple={null} onPress={rateUsHandler}>
            <Text style={styles.text}>Rate Us</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default About;
