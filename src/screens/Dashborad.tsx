import React from 'react';
import {StyleSheet, View} from 'react-native';
import MemberEdit from '../components/MemberEdit';
const machineTypes = [
  {
    title: 'test1',
    type: [
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

const machinesByHash = {
  test1: [
    {
      model: 'fefffe',
      weight: 42443,
      tested: true,
      buy_Date: '2019-3-10',
    },
  ],
};

const Dashborad = () => {
  return (
    <View style={styles.container}>
      {machineTypes.map((item, index) => {
        console.log(index);
        machinesByHash[item.title]
        return <View></View>;
      })}
    </View>
  );
};

export default Dashborad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
