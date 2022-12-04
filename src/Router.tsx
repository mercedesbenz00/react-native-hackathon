import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from './screens/Dashborad';
import Categories from './screens/Categories';
import CategoryDetail from './screens/CategoryDetail';
import {MenuProvider} from 'react-native-popup-menu';
import AsyncStorage from '@react-native-community/async-storage';

const Drawer = createDrawerNavigator();
const Menulist = ['star1', 'star2', 'star3'];

const machineTypes = [
  {
    id: '1',
    categoryName: 'test1',
    titleField: 'model',
    attributeTypes: [
      {
        type: 'Text',
        name: 'model',
      },
      {
        type: 'Number',
        name: 'weight',
      },
      {
        type: 'Checkbox',
        name: 'tested',
      },
      {
        type: 'Date',
        name: 'buy_Date',
      },
    ],
  },
  {
    id: '2',
    categoryName: 'test2',
    titleField: 'model',
    attributeTypes: [
      {
        type: 'Text',
        name: 'model',
      },
      {
        type: 'Number',
        name: 'weight',
      },
      {
        type: 'Checkbox',
        name: 'tested',
      },
      {
        type: 'Date',
        name: 'buy_Date',
      },
    ],
  },
];
const machines = {
  '1': [
    {
      model: 'fefffe',
      weight: 42443,
      tested: false,
      buy_Date: '2019-3-10',
    },
    {
      model: 'fefffe',
      weight: 42443,
      tested: false,
      buy_Date: '2019-3-10',
    },
  ],
};

const App = () => {
  useEffect(() => {
    // saveInfo();
    loadInfo()
  });
  const saveInfo = async () => {
    await AsyncStorage.setItem('machines', JSON.stringify(machines));
    await AsyncStorage.setItem('machinesType', JSON.stringify(machineTypes));
  };
  const loadInfo = async () => {
    const data1=await AsyncStorage.getItem('machines');
    const data2=await AsyncStorage.getItem('machinesType');
    console.log("data0000------", JSON.parse(data1), JSON.parse(data2))
  };
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
