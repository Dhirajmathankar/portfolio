import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';


import { Home} from "./pages"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/Education" element={<Home />} />
        <Route path="/skill" element={<Home />} />
        <Route path="/Contact" element={<Home />} />
        <Route path="/Project" element={<Home />} />
        <Route path="/Github" element={<Home />} />
        <Route path="/Exprince" element={<Home />} />
        <Route path="/feedback" element={<Home />} />
        <Route path="/think" element={<Home />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Provider>
  </BrowserRouter>
);