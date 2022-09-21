import react, { useEffect,useState } from 'react';
import axios from 'axios';

const Home = () => {

    const [users, setUsers] = useState([]);

     

    useEffect(() => {
        loadUsers();
      }, []);

    const loadUsers = async () =>{
        
            let result = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(result.data);
          
    }

    return <div>
        {users.map((user)=>(
            <h1>{user.name}</h1>
        ))}
     </div>
        
}
export default Home;