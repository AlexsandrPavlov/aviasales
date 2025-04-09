import {createStore, combineReducers} from 'redux';
import {filterReducer} from './filterReducer';

const rootReducer = combineReducers({
  filters: filterReducer,
});

const store = createStore(rootReducer);

export default store;
