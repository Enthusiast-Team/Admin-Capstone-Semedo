import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { Store } from './config/store';
import Dashboard from './pages/Dashboard';
import Artikel from './pages/Artikel/Artikel';
import TambahArtikel from './pages/Artikel/TambahArtikel';
import Login from './components/login/Login';
import EditArtikel from './components/form/EditArtikel';



function App() {
  return (
    <>
      <Provider store={Store}>
        <Router>
          <Routes>
            <Route path='/' element={<Login/>} exact/>
            <Route path="/dashboard" element={<Dashboard/> } />
            <Route path="/artikel" element={<Artikel/> } />
            <Route path="/add-artikel" element={<TambahArtikel/> } />
            <Route path="/edit-artikel/:id" element={<EditArtikel/> } />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App;
