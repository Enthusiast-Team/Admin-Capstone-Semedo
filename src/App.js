import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import { Store } from "./config/store";
import Dashboard from './pages/Dashboard';
import Artikel from './pages/Artikel/Artikel';
import TambahArtikel from './pages/Artikel/TambahArtikel';
import Login from './components/login/Login';



function App() {
  return (
    <>
      {/* <Provider store={Store}> */}
      {/* <Provider> */}
        <Router>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path="/" element={<Dashboard/> } />
            <Route path="/artikel" element={<Artikel/> } />
            <Route path="/add-artikel" element={<TambahArtikel/> } />
          </Routes>
        </Router>
      {/* </Provider> */}
    </>
  )
}

export default App;
