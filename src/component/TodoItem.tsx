import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoProps {
    todo: ITodo
}

const TodoItem: FC <TodoProps> =  ({todo}) => {
    return (
        <>  
            <div style={{border: '1px solid black'}}>
                <input type='checkbox' checked={todo.completed}/>
                <p>{todo.id} {todo.title}</p>
            </div>
        </>
        
    );
};

export default TodoItem;