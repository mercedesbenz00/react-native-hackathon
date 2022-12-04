const initialState = {
    machineTypeUniqueIndex: 0,
    machineTypes: [],
    // key: machine type id, value: machine array for machine type
    machinesByHash: {}, 
};

const machineManageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_INITIAL_DATA":
            // need to load inital data from async storage and set store
            return {
                ...state,
                kycStatus: action.payload,
            };
        case "ADD_MACHINE_TYPE":
            machineTypeUniqueIndex++;
            let newMachineType = action.payload;
            newMachineType.id = machineTypeUniqueIndex.toString();
            if (!machineType.titleField) {
                if (machineType.attributeTypes.length > 0) {
                    machineType.titleField = machineType.attributeTypes[0].name;
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
                    ...machinesByHash,
                    [action.type_id]: [
                        ...state.machinesByHash[action.type_id],
                        ...action.payload
                    ]
                }
            };
        case "UPDATE_MACHINE":
            if (state.machinesByHash[action.type_id].length > action.index) {
                state.machinesByHash[action.type_id][action.index] = action.payload;
            }
            return {
                ...state
            };
        case "DELETE_MACHINE":
            if (state.machinesByHash[action.type_id].length > action.index) {
                state.machinesByHash[action.type_id].splice(action.index, 1);
            }
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default machineManageReducer;
