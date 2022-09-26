import { useCallback, useState } from 'react';
import axios from 'axios';
import TodoCreate from './TodoCreate';

const About  = () => {
    const[count, setCount] = useState(1);
    const[todos, setTodos] = useState(1);

   
 
    const addtodos = useCallback(() =>{
        setTodos(todos + 1)
    },[todos])
    
    
    const addcount = () => {
        setCount(count + 1) 
        
    }

  
    return <div>
          <TodoCreate  todos={todos}  addtodos= {addtodos} / >
            <span>count:{count}</span><button onClick={addcount}>Increment</button>
           </div>
}
export default About;