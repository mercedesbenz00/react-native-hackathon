import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MachineEdit from '../components/MachineEdit';
import {
  addMachine,
  updateMachine,
  deleteMachine,
} from './../redux/actions/machineManageAction';
const width = Dimensions.get('window').width;
interface Props {
  category: any;
}

const CategoryDetail = ({category}: Props) => {
  const [pad, setPad] = useState(false);
  useEffect(() => {
    if (width > 768) {
      setPad(true);
    }
  }, []);
  const machines = useSelector(state => state.machineManage.machinesByHash);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <View style={styles.itemview}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{category.categoryName}</Text>
            <TouchableOpacity
              onPress={() => {
                let emptyMachine = {};
                category.attributeTypes &&
                  category.attributeTypes.forEach((attributeType, id) => {
                    switch (attributeType.type) {
                      case 'Text':
                        emptyMachine[attributeType.name] = '';
                        break;
                      case 'Number':
                        emptyMachine[attributeType.name] = 0;
                        break;
                      case 'Checkbox':
                        emptyMachine[attributeType.name] = false;
                        break;
                      case 'Date':
                        emptyMachine[attributeType.name] = new Date();
                        break;
                    }
                  });
                dispatch(addMachine(category.id, emptyMachine));
              }}
              style={styles.titleButton}>
              <Text style={styles.titleButtonText}>ADD NEW ITEM</Text>
            </TouchableOpacity>
          </View>
          {machines[category.id] && machines[category.id].length > 0 ? (
            machines[category.id].map((data, idx) => {
              return (
                <MachineEdit
                  key={idx}
                  type={category}
                  data={data}
                  onChangeValue={(field, value) => {
                    let newData = {...data};
                    newData[field] = value;
                    dispatch(updateMachine(category.id, idx, newData));
                  }}
                  onDelete={() => {
                    dispatch(deleteMachine(category.id, idx));
                  }}
                />
              );
            })
          ) : (
            <Text style={styles.noItem}>No Items to display</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryDetail;

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
  noItem: {
    textAlign: 'center',
    marginTop: 5,
  },
});
