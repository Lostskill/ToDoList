import React from 'react';

const ToDoItem = (props) => {
    return (
        <div className = "items">
            <strong>{props.post.id} {props.post.title}</strong>
            <div>{ props.post.category}</div>
            <div>
                {props.post.description}
                <a style={{color:'green'} } >{props.post.time_create}</a>
            </div>
            <div>
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default ToDoItem;