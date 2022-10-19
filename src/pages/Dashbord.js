import axios from 'axios';
import { useEffect } from 'react';
import { Navigate } from "react-router-dom";
import Navbar from '../components/Layout/Navbar';


  const Dashbord = () =>{
    const logoutUser = () =>{
      localStorage.clear();
      Navigate("/login")
    }
      return <div>
      
      <Navbar></Navbar>
      <button type="submit"  onClick={logoutUser}>Logout</button>
      
     </div>
    
    
}
export default Dashbord;