import React from 'react';

const ToDoItem = (props) => {
    return (
        <div>
            <strong>{props.id} {props.title}</strong>
            <div>
                {props.post.description}
            </div>
            <div>
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default ToDoItem;