import axios from 'axios';
import {useState,useEffect} from 'react';
import Modal from 'react-modal';
    const Dashbord = () =>{
        const[isOpenModal,setIsOPenModal] = useState(false)
        return <div>
               <Modal isOpen={isOpenModal}>
                sdfasdfa
               </Modal>            
             Dashbord
             <button onClick={() => setIsOPenModal(true)}>show modal</button>
        </div>
}
export default Dashbord;