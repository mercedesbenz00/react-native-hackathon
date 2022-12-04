import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import AttributeEditBox from './AttributeEditBox';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

interface Props {
  title: string;
  attributes: Array<any>;
  onItemDelete: (index: string) => void;
  onAddNewItem: () => void;
  onDelete: () => void;
}

const CategoryEdit = ({title, attributes, onItemDelete, onDelete}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.titleInput}
        label="Category Name"
        mode="outlined"
        value={title}
        onChangeText={text => {}}
      />
      {attributes.map((item, index) => {
        return (
          <AttributeEditBox
            type={item.type}
            title="Field"
            text={item.name}
            onChangeValue={() => {}}
            onDelete={() => {}}
          />
        );
      })}
      <TouchableOpacity style={styles.modelButton}>
        <Text style={styles.modelText}>TITLE FILED: MODEL</Text>
      </TouchableOpacity>
      <View style={styles.rowView}>
        <Menu style={styles.menu}>
          <MenuTrigger text="ADD NEW FIELD" />
          <MenuOptions>
            <MenuOption onSelect={() => {}}>
              <Text style={styles.menuText}>Text</Text>
            </MenuOption>
            <MenuOption onSelect={() => {}}>
              <Text style={styles.menuText}>Checkbox</Text>
            </MenuOption>
            <MenuOption onSelect={() => {}}>
              <Text style={styles.menuText}>Date</Text>
            </MenuOption>
            <MenuOption onSelect={() => {}}>
              <Text style={styles.menuText}>Number</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
        <TouchableOpacity style={styles.removeButton}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={require('../assets/images/delete.png')}
          />
          <Text style={styles.removeButtonText}>REMOVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CategoryEdit;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 10,
  },
  titleInput: {
    fontSize: 18,
    marginBottom: 5,
  },
  modelButton: {
    marginTop: 5,
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#238CFD',
    elevation: 1,
    borderRadius: 10,
  },
  modelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  menuText: {
    fontSize: 18,
    color: '#666666',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  rowView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  menu: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 5, 
    marginRight: 10,
    fontSize: 18,
    color: '#238CFD',
  },
  image: {
    width: 18,
    height: 18,
  },
  removeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  removeButtonText: {
    fontSize: 18,
    color: '#666666',
    paddingHorizontal: 5
  }
});
