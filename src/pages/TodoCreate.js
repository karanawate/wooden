import {memo} from 'react';

const TodoCreate = ({todos,addtodos}) =>{
    console.log('render function component')
    return <div>
    <p>function count heat: {todos}</p>
     <button onClick={addtodos}>Add todos</button>
    </div>
}
export default memo(TodoCreate);

