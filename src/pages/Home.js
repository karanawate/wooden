import react, { useEffect,useState } from 'react';
import axios from 'axios';
import './../App.css';

const Home = () => {
    const [users, setUsers] = useState([]);
        useEffect(() =>{
            console.warn('df');
            axios
            .get('http://127.0.0.1:8000/api/users')
            .then(res => {
                setUsers(res.data.data)
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
                <th>email</th>
                <th>created-at</th>
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
                     <td>{user.email}</td>
                     <td>{user.created_at}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     </div>
        
}
export default Home;