import react, { useMemo } from 'react';
import { useState } from 'react';

const About  = () =>{
    const [add, setAdd] = useState(0);
    const [sub, setSub] = useState(1000);

     const multiplicaton = useMemo(() =>{
        console.warn('Hello');
        return add*2;
     },[add]);

    return <div>
      
        countin addition: <span>{add}</span>
        <button onClick={()=>setAdd(add + 1)}>Addition</button>
        <br></br>
        countin Subtration: <span>{sub}</span>
        <button onClick={()=>setSub(sub - 1)}>Subtration</button>
        <br>
        </br>
        {multiplicaton}
    </div>
}
export default About;