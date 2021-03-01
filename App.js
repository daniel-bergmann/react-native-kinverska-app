import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

import { View } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Home from './screens/Home';
import Hsk1 from './screens/hsk/Hsk1';
import Hsk2 from './screens/hsk/Hsk2';
import Hsk3 from './screens/hsk/Hsk3';
import Hsk4 from './screens/hsk/Hsk4';
import Settings from './screens/Settings';

// declaring vars for the tab and stack funtionality in the app
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

// App Logo image in the header
function LogoTitle() {
  return (
    <Image
      style={{ width: 55, height: 55 }}
      source={require('./assets/k-light.svg')}
    />
  );
}

// What screens are to stack on the home stack screen
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
          borderBottomWidth: 0,
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* Home component where you can fint all the HSK choices */}
      <HomeStack.Screen
        name='Home'
        component={Home}
        options={{
          title: '',
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      {/* Stackable Choices for each HSK Level */}
      <HomeStack.Screen
        name='Hsk1'
        component={Hsk1}
        options={{ title: 'HSK 1' }}
      />
      <HomeStack.Screen
        name='Hsk2'
        component={Hsk2}
        options={{ title: 'HSK 2' }}
      />
      <HomeStack.Screen
        name='Hsk3'
        component={Hsk3}
        options={{ title: 'HSK 3' }}
      />
      <HomeStack.Screen
        name='Hsk4'
        component={Hsk4}
        options={{ title: 'HSK 4' }}
      />
    </HomeStack.Navigator>
  );
};

// What screens are to stack on the Home/Settings stack screen
const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f2f2f2',
          borderBottomWidth: 0,
        },
        headerTintColor: '#333',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* Page for settings */}
      <SettingsStack.Screen
        name='Settings'
        component={Settings}
        options={{
          title: '',
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            // Returning icons
            if (route.name === 'Home') {
              return (
                <>
                  <View>
                    <Icon name='cards-variant' size={30} color='#333' />
                  </View>
                </>
              );
            } else {
              return <Icon2 name='settings-outline' size={30} color='#333' />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ccc',
          inactiveTintColor: 'black',
        }}
      >
        <Tabs.Screen
          name='Home'
          component={HomeStackScreen}
          options={{
            title: 'Heim',
          }}
        />
        <Tabs.Screen
          name='Settings'
          component={SettingsStackScreen}
          options={{
            title: 'Stillingar',
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
