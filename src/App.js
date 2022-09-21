import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashbord from './pages/Dashbord';
import Login from './pages/Login';
import About from './pages/About';
import Navbar from './components/Layout/Navbar';
import {BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Router>
          <Navbar />
         
          <Routes>
            <Route   path="/"           element={<Register/>} />
            <Route   path="/home"       element={<Home/>} />
            <Route   path="/about"       element={<About/>} />
            <Route   path="/dashbord"   element={<Dashbord/>} />  
          </Routes>
        </Router>
      </div>
  );
}
export default App;
