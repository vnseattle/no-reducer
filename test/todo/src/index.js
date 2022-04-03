import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { reducer } from 'no-reducer';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

const initialState = {
  ds: {
    list: [],
    selectedId: 0
  }
};

let rootReducer = combineReducers({ ds: reducer })

let store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const windowGlobal = typeof window !== "undefined" && window;

if (windowGlobal) {
  // only on the client
  const composeEnhancer =
    windowGlobal.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // use applyMiddleware to add the thunk middleware to the store
  store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk))
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
