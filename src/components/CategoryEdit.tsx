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
  titleField: string;
  attributes: Array<any>;
  onChnageTitle: (text: string) => void;
  onField: (text: string) => void;
  onChangeText: (text: string, index: number) => void;
  onItemDelete: (index: number) => void;
  onAddNewItem: (type: string) => void;
  onDelete: () => void;
}

const CategoryEdit = ({
  title,
  titleField,
  attributes,
  onField,
  onChnageTitle,
  onChangeText,
  onAddNewItem,
  onItemDelete,
  onDelete,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.titleInput}
        label="Category Name"
        mode="outlined"
        value={title}
        onChangeText={text => {
          onChnageTitle(text);
        }}
      />
      {attributes.map((item, index) => {
        return (
          <AttributeEditBox
            key={index}
            type={item.type}
            title="Field"
            text={item.name}
            onChangeValue={text => {
              onChangeText(text, index);
            }}
            onDelete={() => {
              onItemDelete(index);
            }}
          />
        );
      })}
      <Menu>
        <MenuTrigger>
          <View style={styles.menuFiled}>
            <Text style={styles.menuFiledText}>
              TITLE FIELD: {titleField == '' ? 'UNNAMED FIELD' : titleField}
            </Text>
          </View>
        </MenuTrigger>
        <MenuOptions>
          {attributes.map((item, index) => {
            if (item.name !== '') {
              return (
                <MenuOption
                  key={index}
                  onSelect={() => {
                    onField(item.name);
                  }}>
                  <Text style={styles.menuText}>{item.name}</Text>
                </MenuOption>
              );
            }
          })}
        </MenuOptions>
      </Menu>
      <View style={styles.rowView}>
        <Menu style={styles.menu}>
          <MenuTrigger text="ADD NEW FIELD" />
          <MenuOptions>
            <MenuOption
              onSelect={() => {
                onAddNewItem('Text');
              }}>
              <Text style={styles.menuText}>Text</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => {
                onAddNewItem('Checkbox');
              }}>
              <Text style={styles.menuText}>Checkbox</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => {
                onAddNewItem('Date');
              }}>
              <Text style={styles.menuText}>Date</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => {
                onAddNewItem('Number');
              }}>
              <Text style={styles.menuText}>Number</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
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
  menuText: {
    fontSize: 18,
    color: '#666666',
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  menuFiled: {
    height: 40,
    flex: 1,
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#238CFD',
  },
  menuFiledText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  image: {
    width: 18,
    height: 18,
  },
  removeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    fontSize: 18,
    color: '#666666',
    paddingHorizontal: 5,
  },
});
