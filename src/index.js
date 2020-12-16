import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';      // add semantic ui-css here...

import { createStore, applyMiddleware} from 'redux';  // creat store to store data, applyMiddleWare to use thunk.
import { Provider } from 'react-redux';               //high-order component ~ to connect react with redux. 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';  //chrome devtools..

import App from "./App";
import reportWebVitals from './reportWebVitals';

import rootReducer from './rootReducer';



//next to create store.. 
const store = createStore(
    rootReducer,                  //the whole tree.. the entire stage object.. 
    composeWithDevTools(applyMiddleware(thunk))
);


//enclose the app component in browser router
//to make the router available within the application... 
/*
  BrowserRouter - for routing... 
  Provider - to append the store to the application... 
  store- built ontop... and used to manage the data..
*/
ReactDOM.render( 
  
  <BrowserRouter>

      <Provider store={store}>
        <App/>
      </Provider> 

  </BrowserRouter>, 

  document.getElementById("root")
);


reportWebVitals();
