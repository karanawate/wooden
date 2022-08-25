import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashbord from './pages/Dashbord';
import {BrowserRouter as Router,Route,Routes,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>React router dom</h1>
        <Router>
          <Link to="/home" >Home</Link> 
          <Routes>
            <Route   path="/"           element={<Register/>} />
            <Route   path="/home"       element={<Home/>} />
            <Route   path="/dashbord"   element={<Dashbord/>} />  
          </Routes>
        </Router>
      </div>
  );
}
export default App;
