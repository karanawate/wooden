import { useCallback, useState } from 'react';
import axios from 'axios';
import TodoCreate from './TodoCreate';

const About  = () => {
    const[count, setCount] = useState(1);
    const[todos, setTodos] = useState([]);

    const addtodos = useCallback(() =>{
        setTodos((prev) => [...prev,'new entry']);
    },[todos])
    
    
    const addcount = () => {
        setCount(count + 1) 
        
    }

  
    return <div>
          <TodoCreate todos={todos}  addtodos= {addtodos} / >
            <span>count:{count}</span><button onClick={addcount}>Increment</button>
           </div>
}
export default About;