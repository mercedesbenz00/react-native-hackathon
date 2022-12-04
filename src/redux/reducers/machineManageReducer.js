const initialState = {
    machineTypeUniqueIndex: 0,
    machineTypes: [],
    // key: machine type id, value: machine array for machine type
    machinesByHash: {}, 
};

const machineManageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_INITIAL_DATA":
            // need to load inital data
            return {
                ...state,
                machineTypeUniqueIndex: action.payload.machineTypeUniqueIndex || 0,
                machineTypes: action.payload.machineTypes || [],
                machinesByHash: action.payload.machinesByHash || {},
            };
        case "ADD_MACHINE_TYPE":
            state.machineTypeUniqueIndex++;
            let newMachineType = action.payload;
            newMachineType.id = state.machineTypeUniqueIndex.toString();
            if (!newMachineType.titleField) {
                if (newMachineType.attributeTypes.length > 0) {
                    newMachineType.titleField = newMachineType.attributeTypes[0].name;
                }
            }
            return {
                ...state,
                machineTypes: [ ...state.machineTypes, newMachineType],
            };
        case "UPDATE_MACHINE_TYPE":
            const updatedItems = state.machineTypes.map(item => {
                if(item.id === action.id){
                  return { ...item, ...action.payload }
                }
                return item
              })
            return {
                ...state,
                machineTypes: updatedItems,
            };
        case "CHANGE_TYPE_FIELD":
            const newMachineTypes = state.machineTypes.map(item => {
                if(item.id === action.type_id){
                  return { ...item, titleField: action.titleField }
                }
                return item
              })
            return {
                ...state,
                machineTypes: newMachineTypes,
            };
        case "DELETE_MACHINE_TYPE":
            const items = state.machineTypes.filter(item => {
                return item.id !== action.id
              })
            return {
                ...state,
                machineTypes: items,
            };
        case "ADD_MACHINE":
            if (!state.machinesByHash[action.type_id]) {
                state.machinesByHash[action.type_id] = [];
            }
            return {
                ...state,
                machinesByHash: {
                    ...state.machinesByHash,
                    [action.type_id]: [
                        action.payload,
                        ...state.machinesByHash[action.type_id]
                    ]
                }
            };
        case "UPDATE_MACHINE":
            let machineInfo = [...state.machinesByHash[action.type_id]];
            if (machineInfo.length > action.index) {
                machineInfo[action.index] = action.payload;
            }
            return {
                ...state,
                machinesByHash: {
                    ...state.machinesByHash,
                    [action.type_id]: machineInfo
                }
            };
        case "DELETE_MACHINE":
            let machineInfoToDelete = [...state.machinesByHash[action.type_id]];
            if (machineInfoToDelete.length > action.index) {
                machineInfoToDelete.splice(action.index, 1);
            }
            return {
                ...state,
                machinesByHash: {
                    ...state.machinesByHash,
                    [action.type_id]: machineInfoToDelete
                }
            };
        default:
            return state;
    }
};

export default machineManageReducer;
