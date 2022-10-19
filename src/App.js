import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashbord from './pages/Dashbord';
import Login from './pages/Login';
import About from './pages/About';
import TodoCreate from './pages/TodoCreate';
import Navbar from './components/Layout/Navbar';
import UserDetail from './pages/UserDetail';
import AddAdmin from './pages/AddAdmin';
import {BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import React, { useContext, createContext, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactModal from 'react-modal';
import PrivateRoutes from './pages/utils/PrivateRoutes';

function App() {
  const [user, setUser] = useState(null);
  let userLogin  = localStorage.getItem('user')
  
  

  return (
    <div className="App">
        <Router>
                 
          <Routes>
            <Route element={<PrivateRoutes/>}>
              <Route   path="/home"                   element={<Home/>} />
              <Route   path="/user-detail/:id"        element={<UserDetail/>} />
              <Route   path="/about"                  element={<About/>} />
              <Route   path="/dashboard"               element={<Dashbord/>} />  
              <Route   path="/add-admin"              element={<AddAdmin/>} />  
          </Route>
          
          <Route   path="/register"               element={<Register/>} />
          <Route path="/login"                         element={<Login/>} />              
          </Routes>
        </Router>
      </div>
  );
}
export default App;

