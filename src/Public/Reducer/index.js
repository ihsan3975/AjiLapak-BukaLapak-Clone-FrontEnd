import {combineReducers} from 'redux';
import React, {Component} from 'react'

// import products from './products';
import users from './users';
// import categories from './categories';

const rootReducers = combineReducers({
  users
//   products,
//   categories,
});

// class rootReducers extends Component {
//   reducers = combineReducers({
//     users,
//   })
// }
export default rootReducers; 
