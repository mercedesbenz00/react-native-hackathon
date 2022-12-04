import {createStore, combineReducers} from 'redux';
import {machineManageReducer} from '../reducers';
const rootReducer = combineReducers({
  machineManage: machineManageReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
