import react, { useCallback, useEffect,useState } from 'react';
import axios from 'axios';
import './../App.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([])
    const [openedUser, setUserOpened] = useState(null)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [isDeleting, setisDeleting] = useState(null)

        useEffect(() =>{
            loadUsers()
        },[]);

        const loadUsers = async () =>{
            await axios
            .get('http://127.0.0.1:8000/api/users')
            .then(res => {
                setUsers(res.data.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }



        const deleteUsrs = async id =>{
            setisDeleting(id)
                            await
                            axios
                            .post("http://127.0.0.1:8000/api/user-delete",{
                                    'id':id
                                })
                                .then(res =>{
                                    console.log(res)
                                    setisDeleting(null)
                                    loadUsers()
                                })
                                .catch(err =>{
                                    console.log(err);
                            })
        }
        

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
                <tr>
                    <th>Roll No</th>
                    <th>name</th>
                    <th>email</th>
                    <th>created-at</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index) =>(
                    <tr key={user.id}>
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
                     <td><button onClick={() => deleteUsrs(user.id)}>{isDeleting === user.id ? 'Deleting...' : 'Delete'}</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        



        
     </div>
        
}
export default Home;