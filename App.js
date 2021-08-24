import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import All from './src/screens/All';
import Business from './src/screens/Business';
import HealthScreen from './src/screens/HealthScreen';
import SportsScreen from './src/screens/SportsScreen';
import TechScreen from './src/screens/TechScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="All" component={All} options={{
          tabBarIcon: (props) => (
            <Icon type='feather' name='home' color={props.color} />
          ),
        }} />
        <Tab.Screen name="Business" component={Business}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name='dollar-sign' color={props.color} />
            )
          }}
        />
        <Tab.Screen name="Health" component={HealthScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type="feather" name='heart' color={props.color} />
            )
          }} />
        <Tab.Screen name="Sports" component={SportsScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type="ionicon" name='tennisball-outline' color={props.color} />
            )
          }} />
        <Tab.Screen name="Tech" component={TechScreen}
          options={{
            tabBarIcon: (props) => (
              <Icon type="ionicon" name='hardware-chip-outline' color={props.color} />
            )
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});