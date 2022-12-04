import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from './screens/Dashborad';
import Categories from './screens/Categories';
import CategoryDetail from './screens/CategoryDetail';
import {MenuProvider} from 'react-native-popup-menu';

const Drawer = createDrawerNavigator();
const Menulist = ['star1', 'star2', 'star3'];
const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          {Menulist.map((item, index) => {
            return (
              <Drawer.Screen
                key={index}
                name={item}
                component={CategoryDetail}
              />
            );
          })}
          <Drawer.Screen name="Manage Categories" component={Categories} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
