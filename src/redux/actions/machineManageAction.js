import AsyncStorage from '@react-native-community/async-storage';

const saveMachines = async (machines) => {
  await AsyncStorage.setItem('machines', JSON.stringify(machines));
};

const saveMachineTypes = async (machineTypes, machineTypeUniqueIndex) => {
  await AsyncStorage.setItem('machineTypes', JSON.stringify(machineTypes));
  await AsyncStorage.setItem('machineTypeUniqueIndex', JSON.stringify({ value: machineTypeUniqueIndex }));
};

export function addMachineType(data) {
  try {
    return async (dispatch,getState) => {
      dispatch({
        type: 'ADD_MACHINE_TYPE',
        payload: data
      });
      
      const { machineTypes, machineTypeUniqueIndex } = getState().machineManage;
      await saveMachineTypes(machineTypes, machineTypeUniqueIndex);
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
}
export function updateMachineType(id, data) {
  try {
    return async (dispatch,getState) => {
      dispatch({
        type: 'UPDATE_MACHINE_TYPE',
        payload: data,
        id: id
      });

      const { machineTypes, machineTypeUniqueIndex } = getState().machineManage;
      saveMachineTypes(machineTypes, machineTypeUniqueIndex);
    };
  } catch (error) {
    console.log(error);
  }
}

export function changeTypeField(type_id, titleField) {
  try {
    return async (dispatch,getState) => {
      dispatch({
        type: 'CHANGE_TYPE_FIELD',
        type_id: type_id,
        titleField: titleField
      });

      
      const { machineTypes, machineTypeUniqueIndex } = getState().machineManage;
      await saveMachineTypes(machineTypes, machineTypeUniqueIndex);
    };
  } catch (error) {
    console.log(error);
  }
}

export function deleteMachineType(id) {
  try {
    return async (dispatch, getState) => {
      dispatch({
        type: 'DELETE_MACHINE_TYPE',
        id: id,
      });
      
      const { machineTypes, machineTypeUniqueIndex } = getState().machineManage;
      await saveMachineTypes(machineTypes, machineTypeUniqueIndex);
    };
  } catch (error) {
    console.log(error);
  }
}
export function addMachine(type_id, data) {
  try {
    return async (dispatch, getState) => {
      dispatch({
        type: 'ADD_MACHINE',
        type_id: type_id,
        payload: data,
      });

      const { machinesByHash } = getState().machineManage;
      await saveMachines(machinesByHash);
    };
  } catch (error) {
    console.log(error);
  }
}
export function updateMachine(type_id, index, data) {
  try {
    return async (dispatch, getState) => {
      dispatch({
        type: 'UPDATE_MACHINE',
        type_id: type_id,
        index: index,
        payload: data,
      });

      const { machinesByHash } = getState().machineManage;
      await saveMachines(machinesByHash);
    };
  } catch (error) {
    console.log(error);
  }
}
export function deleteMachine(type_id, index) {
  try {
    return async (dispatch, getState) => {
      dispatch({
        type: 'DELETE_MACHINE',
        type_id,
        index: index,
      });

      const { machinesByHash } = getState().machineManage;
      await saveMachines(machinesByHash);
    };
  } catch (error) {
    console.log(error);
  }
}

export const loadInfo = () => {
  try {
    return async dispatch => {
      const strMachines = await AsyncStorage.getItem('machines');
      const strMachineTypes = await AsyncStorage.getItem('machineTypes');
      const strMachineTypeLastIndex = await AsyncStorage.getItem('machineTypeUniqueIndex');

      let machines = strMachines ? JSON.parse(strMachines) : {};
      let machineTypes = strMachineTypes ? JSON.parse(strMachineTypes) : [];
      let machineTypeUniqueIndex = strMachineTypeLastIndex ? JSON.parse(strMachineTypeLastIndex).value : 0;
    
      dispatch({
        type: 'LOAD_INITIAL_DATA',
        payload: {
          machinesByHash: machines,
          machineTypes,
          machineTypeUniqueIndex
        }
      });
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};


