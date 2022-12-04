import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from './screens/Dashborad';
import Categories from './screens/Categories';
import CategoryDetail from './screens/CategoryDetail';
import {MenuProvider} from 'react-native-popup-menu';
import {loadInfo} from './redux/actions/machineManageAction';
const Drawer = createDrawerNavigator();

const App = () => {
  const dispatch = useDispatch();
  const machineTypes = useSelector(state => state.machineManage.machineTypes);
  useEffect(() => {
    dispatch(loadInfo());
  }, []);

  return (
    <MenuProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          {machineTypes.map((item, index) => {
            if (item.categoryName && item.categoryName.length > 0) {
              return (
                <Drawer.Screen
                  key={index}
                  name={item.categoryName}
                  component={() => <CategoryDetail category={item} />}
                />
              );
            }
          })}
          <Drawer.Screen name="Manage Categories" component={Categories} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

export default App;
