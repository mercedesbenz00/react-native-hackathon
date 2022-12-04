import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MemberEdit from '../components/MemberEdit';
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
];
const machines = {
  '1': [
    {
      model: 'fefffe',
      weight: 42443,
      tested: false,
      buy_Date: '2019-3-10',
    },
  ],
};

const Dashborad = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {machineTypes.map((item, index) => {
          return (
            <View style={styles.itemview}>
              <View style={styles.title}>
                <Text style={styles.titleText}>{item.categoryName}</Text>
                <TouchableOpacity style={styles.titleButton}>
                  <Text style={styles.titleButtonText}>ADD NEW ITEM</Text>
                </TouchableOpacity>
              </View>
              {machines[item.id].map((data, idx) => {
                return (
                  <MemberEdit
                    type={item}
                    data={data}
                    onChangeValue={value => {}}
                    onDelete={() => {}}
                  />
                );
              })}
            </View>
          );
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
  itemview: {
    width: '100%',
    padding: 10,
  },
  title: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#999999',
    alignItems: 'center',
  },
  titleText: {fontSize: 24, color: '#000000', fontWeight: 'bold', flex: 1},
  titleButton: {
    width: 150,
    height: 40,
    backgroundColor: '#238CFD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
