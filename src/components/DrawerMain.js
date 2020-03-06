import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {Icon} from 'react-native-elements';
import HomeTab from './HomeTab';
import Settings from './Setting';
const Drawer = createDrawerNavigator();

const DrawerMain = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      drawerType="slide"
      drawerPosition="right"
      drawerContentOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'transparent',
      }}>
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({color}) => {
            return <Icon name="settings" color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          drawerLabel: () => null,
          gestureEnabled: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerMain;
