import React from 'react';
import ReactDOM from 'react-dom';
import logo from './built-logo.png';
import './App.css';

// import GUI from './containers/gui.js';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import loansReducer from './reducers/loans.js';
import budgetsReducer from './reducers/budgets.js';
import collateralReducer from './reducers/collateral.js';


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import BuiltApp from './containers/builtApp';

const reducers = combineReducers({
  loans: loansReducer,
  budgets: budgetsReducer,
  collateral: collateralReducer
})
const store = createStore(reducers);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BuiltApp />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

export default App;