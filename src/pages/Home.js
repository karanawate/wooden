import react, { useEffect,useState } from 'react';
import axios from 'axios';
import './../App.css';

const Home = () => {
    const [users, setUsers] = useState([]);
        useEffect(() =>{
            axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        },[]);

    return <div>
        <table>
            <thead>
                <th>Roll No</th>
                <th>name</th>
            </thead>
            <tbody>
                {users.map((user,index) =>(
                    <tr>
                     <td>
                        {index + 1}
                     </td>
                     <td>
                        <img className='avatar' src={`https://ui-avatars.com/api/?bold=true&background=random&name=`+user.name} />
                        {user.name}
                     </td>
                    </tr>
                ))}
            </tbody>
        </table>
     </div>
        
}
export default Home;