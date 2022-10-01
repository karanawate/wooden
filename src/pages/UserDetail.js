import axios from 'axios';
import React, { useEffect,useState } from 'react';
import {useParams } from 'react-router-dom';

const UserDetail =  () =>{
    const {id} = useParams();
    const[detail, setDetails] = useState([]);
    useEffect(() =>{
        axios
        .get(`http://127.0.0.1:8000/api/particular-details/${id}`)
        .then(res =>{
            setDetails(res.data)
           console.log('dfd');
        })
        .catch(err =>{
            console.log(err)
        })
    })
    return <div>
        {JSON.stringify(detail)}
    </div>
} 

export default UserDetail;