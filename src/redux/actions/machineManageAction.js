
export function addMachineType(data) {
  return {
    type: 'ADD_MACHINE_TYPE',
    payload: data,
  };
}
export function updateMachineType(id, data) {
  return {
    type: 'UPDATE_MACHINE_TYPE',
    payload: data,
    id: id
  };
}
export function deleteMachineType(id) {
  return {
    type: 'DELETE_MACHINE_TYPE',
    id: id,
  };
}
export function addMachine(type_id, data) {
  return {
    type: 'ADD_MACHINE',
    type_id: type_id,
    payload: data,
  };
}
export function updateMachine(index, data) {
  return {
    type: 'UPDATE_MACHINE',
    payload: data,
    index: index
  };
}
export function deleteMachine(index) {
  return {
    type: 'DELETE_MACHINE',
    index: index,
  };
}

