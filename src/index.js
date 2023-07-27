import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./employee/List";
import View from "./employee/View";
import Create from "./employee/Create";
import Update from "./employee/Update";
import Delete from "./employee/Delete";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={`/`} element={<List/>}/>
              <Route path={`/views/:id`} element={<View/>}/>
              <Route path={`/create`} element={<Create/>}/>
              <Route path={`/update/:id`} element={<Update/>}/>
              <Route path={`/delete/:id`} element={<Delete/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
