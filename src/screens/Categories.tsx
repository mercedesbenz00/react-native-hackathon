import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import CategoryEdit from '../components/CategoryEdit';
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
  }
];
const machines= {
  test1: [
    {
      model:'fefffe', 
      weight: 42443,
      tested: true,
      buy_Date: '2019-3-10'
    }
  ],
}

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {machineTypes.map((item, index) => {
          return (
            <CategoryEdit
              title={item.title}
              attributes={item.type}
              onItemDelete={index => {}}
              onAddNewItem={() => {}}
              onDelete={() => {}}
            />
          );
        })}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ADD NEW CATEGORY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollview: {flex: 1},
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#238CFD',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    height: 80,
    justifyContent: 'center',
    padding: 10,
  },
});
