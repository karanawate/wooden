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
import AddLogin from './pages/AddLogin';
import {BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactModal from 'react-modal';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />  
          <Routes>
            <Route   path="/"           element={<Register/>} />
            <Route   path="/home"       element={<Home/>} />
            <Route   path="/user-detail/:id"       element={<UserDetail/>} />
            <Route   path="/about"       element={<About/>} />
            <Route   path="/dashbord"   element={<Dashbord/>} />  
            <Route   path="/add-admin"   element={<AddAdmin/>} />  
            <Route path="/add-login" element={<AddLogin/>} />              
          </Routes>
        </Router>
      </div>
  );
}
export default App;

