import react, { useContext, useEffect, useMemo } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { mydata } from '../App';

const About  = () =>{
    const username = useContext(mydata);

    const[users,setUser] = useState([]);
    
    useEffect(() =>{
        axios
        .get('http://127.0.0.1:8000/api/users')
        .then(res =>{
            setUser(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    return <div>
        {JSON.stringify(username)}

        {users.map((user)=>(
            <p1>{user.name}</p1>
        ))}
      
        </div>
}
export default About;