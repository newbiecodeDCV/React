import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { UserProvider } from './Context/UseContext';
import { DataProvider1,DataProvider2,DataProvider3,DataProvider4,DataProvider5, DataProvider6} from './Context/UseContext';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <DataProvider1>
  <DataProvider2>
  <DataProvider3>
  <DataProvider4>
  <DataProvider5>
  <DataProvider6>
  <UserProvider>
    <App />
    </UserProvider>
    </DataProvider6>
    </DataProvider5>
    </DataProvider4>
    </DataProvider3>
    </DataProvider2>
    </DataProvider1>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();