import { combineReducers } from 'redux';
import data from './data';
import { reducer as formReducer } from 'redux-form'


export default combineReducers ({
    data,
    form: formReducer,
})