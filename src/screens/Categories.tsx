import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import CategoryEdit from '../components/CategoryEdit';
import {
  addMachineType,
  updateMachineType,
  deleteMachineType,
  changeTypeField,
} from './../redux/actions/machineManageAction';

const emptyData = {
  categoryName: '',
  titleField: '',
  attributeTypes: [],
};
const Categories = () => {
  const machineTypes = useSelector(state => state.machineManage.machineTypes);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {machineTypes.map((item, index) => {
          return (
            <CategoryEdit
              key={index}
              title={item.categoryName}
              titleField={item.titleField}
              onField={text => {
                dispatch(changeTypeField(item.id, text));
              }}
              onChnageTitle={text => {
                let machineType = item;
                machineType.categoryName = text;
                dispatch(updateMachineType(item.id, machineType));
              }}
              onChangeText={(text, index) => {
                let machineType = item;
                machineType.attributeTypes[index].name = text;
                dispatch(updateMachineType(item.id, machineType));
              }}
              attributes={item.attributeTypes}
              onItemDelete={index => {
                let machineType = item;
                machineType.attributeTypes.splice(index, 1);
                dispatch(updateMachineType(item.id, machineType));
              }}
              onAddNewItem={type => {
                let machineType = item;
                if (!machineType.attributeTypes) {
                  machineType.attributeTypes = [];
                }
                machineType.attributeTypes.push({
                  type: type,
                  name: '',
                });
                dispatch(updateMachineType(item.id, machineType));
              }}
              onDelete={() => {
                dispatch(deleteMachineType(item.id));
              }}
            />
          );
        })}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            dispatch(addMachineType(emptyData));
          }}
          style={styles.button}>
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
