import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
interface Props {
  type: any;
  data: Array<any>;
  onChangeValue: (field: string, value: any) => void;
  onDelete: () => void;
}

const MachineEdit = ({type, data, onChangeValue, onDelete}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data[type.titleField] || 'UNNAMED'}</Text>
      {type.attributeTypes.map((item, index) => {
        if (item.type == 'Text') {
          return (
            <TextInput
              key={index}
              style={styles.textInput}
              label={item.name}
              mode="outlined"
              value={data[item.name]}
              onChangeText={text => onChangeValue(item.name, text)}
            />
          );
        }

        if (item.type == 'Number') {
          return (
            <TextInput
              key={index}
              style={styles.textInput}
              label={item.name}
              mode="outlined"
              value={data[item.name]}
              keyboardType="numeric"
              onChangeText={text => onChangeValue(item.name, text)}
            />
          );
        }
        if (item.type == 'Checkbox') {
          return (
            <View key={index} style={styles.checkbox}>
              <Switch
                trackColor={{false: '#333333', true: 'green'}}
                thumbColor={'#f4f3f4'}
                onValueChange={value => {
                  onChangeValue(item.name, value);
                }}
                value={data[item.name]}
              />
              <Text style={styles.checkboxText}>{item.name}</Text>
            </View>
          );
        }
        if (item.type == 'Date') {
          return (
            <View key={index} style={styles.datebox}>
              <Text style={styles.checkboxText}>{item.name}:</Text>
              <Text style={styles.checkboxText}>{data[item.name]}:</Text>
              <DatePicker
                modal
                open={true}
                date={new Date()}
                onConfirm={date => {}}
                onCancel={() => {}}
              />
            </View>
          );
        }
      })}
      <TouchableOpacity
        onPress={() => {
          onDelete();
        }}
        style={styles.removeButton}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/images/delete.png')}
        />
        <Text style={styles.removeButtonText}>REMOVE</Text>
      </TouchableOpacity>
    </View>
  );
};
export default MachineEdit;

const styles = StyleSheet.create({
  container: {
    marginVertical: 7,
    width: '100%',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    padding: 5,
  },
  textInput: {marginTop: 5},
  checkbox: {
    marginVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333333',
  },
  datebox: {
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 5,
    height: 50
  },
  image: {
    width: 18,
    height: 18,
  },
  removeButton: {
    marginVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButtonText: {
    fontSize: 18,
    color: '#666666',
    paddingHorizontal: 5,
  },
});
