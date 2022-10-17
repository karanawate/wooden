import axios from 'axios';
import {useState,useEffect} from 'react';

let usere = localStorage.getItem('user');

const Dashbord = () =>{
const[isAdmins, setIsAdmins] = useState([])

    useEffect( () =>{
        loadAdmins()
    })
    const loadAdmins = async () =>{
                        await
                        axios
                        .get('http://127.0.0.1:8000/api/users')
                        .then( res => {
                            setIsAdmins(res.data.data)
                        })
                        .catch(err =>{
                            console.log(err)
                        })
    }
    return <div>
        {JSON.stringify(isAdmins)}
        Dashbord</div>
}
export default Dashbord;