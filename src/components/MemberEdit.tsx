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
  onChangeValue: (value: any) => void;
  onDelete: () => void;
}

const MemberEdit = ({type, data, onChangeValue, onDelete}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type.titleField}</Text>
      {type.attributeTypes.map((item, index) => {
        if (item.type == 'Text') {
          return (
            <TextInput
              style={styles.textInput}
              label={item.name}
              mode="outlined"
              value={data[item.name]}
              onChangeText={text => onChangeValue(text)}
            />
          );
        }

        if (item.type == 'Number') {
          return (
            <TextInput
              style={styles.textInput}
              label={item.name}
              mode="outlined"
              value={data[item.name]}
              keyboardType="numeric"
              onChangeText={text => onChangeValue(text)}
            />
          );
        }
        if (item.type == 'Checkbox') {
          return (
            <View style={styles.checkbox}>
              <Switch
                trackColor={{false: '#333333', true: 'green'}}
                thumbColor={'#f4f3f4'}
                onValueChange={value => {}}
                value={data[item.name]}
              />
              <Text style={styles.checkboxText}>{item.name}</Text>
            </View>
          );
        }
        if (item.type == 'Date') {
          return (
            <View style={styles.datebox}>
              <Text style={styles.checkboxText}>{item.name}:</Text>
              <Text style={styles.checkboxText}>{data[item.name]}:</Text>
              {/* <DatePicker
                modal
                open={true}
                date={new Date()}
                onConfirm={date => {}}
                onCancel={() => {}}
              /> */}
            </View>
          );
        }
      })}
    </View>
  );
};
export default MemberEdit;

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
    marginVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 5,
    backgroundColor: 'red'
  },
});
