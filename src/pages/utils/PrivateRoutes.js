import React from "react";
import { useState,useEffect } from "react";
import { Outlet,Navigate } from "react-router-dom";

const PrivateRoutes = ({children, ...rest}) =>{
    const [ user, setUser ] = useState(() => JSON.parse(localStorage.getItem('user')))

    useEffect(() => {
        const val = JSON.parse(localStorage.getItem('user'))
        console.log({ val })
        setUser(val)
      }, [])
    

    
    return (
        user ? <Outlet /> : <Navigate to ='/login' />

       
    )
    
}
export default PrivateRoutes;