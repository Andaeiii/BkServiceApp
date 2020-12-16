import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';      // add semantic ui-css here...
import App from "./App";
import reportWebVitals from './reportWebVitals';

//enclose the app component in browser router
//to make the router available within the application... 

ReactDOM.render(
  <BrowserRouter>             
    <App/>
  </BrowserRouter>,
  document.getElementById("root")
)


reportWebVitals();
