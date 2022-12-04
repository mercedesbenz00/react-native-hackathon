import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {machineManageReducer} from '../reducers';
const rootReducer = combineReducers({
  machineManage: machineManageReducer,
});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
