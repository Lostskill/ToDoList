import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import TodoService from './API/ToDoService';
import MyModal from './UI/MyModal/MyModal';
import PostForm from './PostForm';
const ToDoItem = ({ props, value }) => {
    const [modalupdate, setModalUpdate] = useState(false);
    return (
        <div className = "items">
            <strong>{props.post.title}</strong>
            <div>{ props.post.category}</div>
            <div>
                {props.post.description}
                <a style={{color:'green'} } >{props.post.time_create}</a>
            </div>
            <div>
                <MyButton onClick = {() => setModalUpdate(true)}>Изменить</MyButton>
            </div>

            <div>
                <button type="submit" onClick={() => { TodoService.deleteTodo(props.post.id); document.location.reload(); }}>Удалить</button>
            </div>
        </div>
    )
}

export default ToDoItem;