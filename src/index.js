import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./tour/List";
import View from "./tour/View";
import Create from "./tour/Create";
import Update from "./tour/Update";
import Delete from "./tour/Delete";

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
