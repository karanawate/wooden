import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


  const Dashbord = () =>{
    let loginUser = localStorage.getItem('user')
    const navigate = useNavigate();

    useEffect(() => {
      if(!loginUser)
      {
        navigate('/')
        // return null
      }
    }, [ loginUser ])
    if(!loginUser)

    {
      navigate('/')
      return null
    }
      return <div>
         {loginUser}
          Dashbord
     </div>
    
    
}
export default Dashbord;