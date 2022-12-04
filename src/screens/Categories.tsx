import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import AttributeEditBox from '../components/AttributeEditBox';
import CategoryEdit from '../components/CategoryEdit';
const dummy = [
  {
    title: 'adfrefe',
    type: [
      {
        type: 'number',
        name: 'type1',
      },
      {
        type: 'number',
        name: 'type2',
      },
      {
        type: 'number',
        name: 'type3',
      },
      {
        type: 'number',
        name: 'type4',
      },
    ],
    data: [
        {field: 'type1', value: ''}
    ]
  },
  {
    title: 'adfrefe',
    type: [
      {
        type: 'number',
        name: 'sadfefef',
      },
      {
        type: 'number',
        name: 'sadfefef',
      },
      {
        type: 'number',
        name: 'sadfefef',
      },
      {
        type: 'number',
        name: 'sadfefef',
      },
    ],
  },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {dummy.map((item, index) => {
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
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
