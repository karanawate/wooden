import react from 'react';
import { useState } from 'react';

const About  = () =>{
    const [name, setName] = useState('Karan')
    return <div>
        <h5>Hello {name}</h5>
    </div>
}
export default About;