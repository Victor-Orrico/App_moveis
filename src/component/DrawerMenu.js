import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Aladim from './Aladim';
import Avatar from './Avatar';
import Atomica from './Atomica';
import F_300 from './F_300';
import Home from './Home';

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Aladim' component={Aladim} />
        <Drawer.Screen name='Avatar' component={Avatar} />
        <Drawer.Screen name='Atomica' component={Atomica} />
        <Drawer.Screen name='F_300' component={F_300} />
      </Drawer.Navigator>
  );
}