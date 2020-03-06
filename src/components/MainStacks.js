// Import Module
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Page
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

// Set MainStack
const MainStack = createStackNavigator();

const MainStacks = () => {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="LoginPage">
          <MainStack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="HomePage"
            component={HomePage}
            options={{headerShown: false}}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainStacks;
