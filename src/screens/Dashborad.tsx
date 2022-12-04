import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, View, ScrollView} from 'react-native';
import CategoryDetail from './CategoryDetail';

const Dashborad = () => {
  const machineTypes = useSelector(state => state.machineManage.machineTypes);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {machineTypes.map((item, index) => {
          return <CategoryDetail key={index} category={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Dashborad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
  },
});
