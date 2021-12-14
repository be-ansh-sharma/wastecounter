import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/home/Home';
import Birthday from 'screens/birthday/Birthday';
import Settings from 'screens/settings/Settings';
import { Dimensions } from 'react-native';
import { COLOR } from 'global/styles';
import Modal from 'screens/modal/Modal';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const defaultOptions = {
  headerLeft: null,
  headerTitle: 'Waste Counter',
  headerStyle: {
    backgroundColor: COLOR.primary,
  },
  headerTintColor: COLOR.background,
};

const defaultTabOption = {
  indicatorStyle: {
    backgroundColor: COLOR.primary,
  },
};

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={defaultTabOption}
      initialLayout={{ width: Dimensions.get('window').width }}
      sceneContainerStyle={{}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={defaultOptions}
      />
      <Stack.Screen
        name="Modal"
        component={Modal}
        options={({ route }) => {
          let { title, headerShown } = route?.params;
          return {
            headerShown: headerShown === false ? false : true,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: COLOR.primary,
            },
            title: title || 'Drinking Buddy',
          };
        }}
      />
    </Stack.Navigator>
  );
};

export const InformationNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Birthday" component={Birthday} options={defaultOptions} />
    </Stack.Navigator>
  );
};