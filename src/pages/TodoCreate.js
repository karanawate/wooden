import {memo} from 'react';

const TodoCreate = ({todos,addtodos}) =>{
    console.log('render function component')
    return <div>
       <h1>My Todos</h1>
       {todos.map((todo, index) =>{
        return <p key={index}>{todo + index}</p>
     })}

     <button onClick={addtodos}>Add todos</button>
    </div>
}
export default memo(TodoCreate);

