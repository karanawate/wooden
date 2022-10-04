import react, { useCallback, useEffect,useState } from 'react';
import axios from 'axios';
import './../App.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';



 

const Home = () => {
    const [users, setUsers] = useState([]);
    const [openedUser, setUserOpened] = useState(null)
    const [modalIsOpen, setIsOpen] = useState(false);

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
    <Modal 
        style={{
            content: {
                display: "flex",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 0,
                flexDirection: "column",
                flex: 1,
                position: "unset",
                height: "100%",
                overflow: "auto",
                justifyContent: "center",
            },
            }}
         isOpen={modalIsOpen}>
            <div className='modalview'>
                <div >
                {JSON.stringify(openedUser)}
                </div>
            </div>
    </Modal>
        <button><Link to="/add-admin">Add admin</Link></button>
        <table className='table table-hover'>
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
                        <img className='avatar' src={`https://ui-avatars.com/api/?bold=true&background=random&name=`+user.name} onClick={()=> {setIsOpen(true); setUserOpened(user)}}  />
                        {/* <Link to={`/user-detail/${user.id}`}>{user.name}</Link> */}
                        {user.name}
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