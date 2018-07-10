
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import CanvasReducer from './Canvas_Reducer';
/*

const allReducers = {
    canvas: CanvasReducer
};
const rootReducer = combineReducers(allReducers);
*/

let store = createStore(CanvasReducer);

export default store;