import React from 'react';
import TodoService from './API/ToDoService';
const ToDoItem = (props) => {
    
    return (
        <div className = "items">
            <strong>{props.post.title}</strong>
            <div>{ props.post.category}</div>
            <div>
                {props.post.description}
                <a style={{color:'green'} } >{props.post.time_create}</a>
            </div>
            <div>
                <button type="submit" onClick={() => { TodoService.deleteTodo(props.post.id); document.location.reload(); }}>Удалить</button>
            </div>
        </div>
    )
}

export default ToDoItem;