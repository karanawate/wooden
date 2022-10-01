import react, { useCallback, useEffect,useState } from 'react';
import axios from 'axios';
import './../App.css';
import { Link } from 'react-router-dom';

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

        
        const delteuser = useCallback((id) =>{
                            axios.delete(`http://127.0.0.1:8000/api/user-delete/${id}`)
                            .then(res =>{
                                console.log(res)
                            })
                            .catch(err =>{
                                console.log(err);
                            })
        })

    return <div>
        <button><Link to="/add-admin">Add admin</Link></button>
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
                        <Link to={`/user-detail/${user.id}`}>{user.name}</Link>
                     </td>
                     <td>{user.email}</td>
                     <td>{user.created_at}</td>
                     <button onClick={delteuser(user.id)}>delete</button>
                     
                    </tr>
                ))}
            </tbody>
        </table>
     </div>
        
}
export default Home;