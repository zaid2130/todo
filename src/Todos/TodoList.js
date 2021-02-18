import React from 'react';
import Todo from './Todo';
import './Todo.css';

const todoList = (props) => {
    const todos = props.tasks.map( (todo, index) =>{
        return <Todo content={todo.name} key={index}></Todo>
    })

    return(
         <div className='list-wrapper'> {todos} </div>
    );
};

export default todoList;