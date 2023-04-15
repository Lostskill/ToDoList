import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import TodoService from './API/ToDoService';
import MyModal from './UI/MyModal/MyModal';
import PostForm from './PostForm';
const ToDoItem = ({post,value}) => {
    const [modalupdate, setModalUpdate] = useState(false);
    const token = localStorage.getItem('token');

    return (
        <div className = "items">
            <strong>{post.title}</strong>
            <div>{ post.category}</div>
            <div>
                {post.description}
                <a style={{color:'green'} } >{post.time_create}</a>
            </div>
            <div>
                <MyButton onClick = {() => setModalUpdate(true)}>Изменить</MyButton>
            </div>
            <MyModal visible={modalupdate} setVisible={setModalUpdate}>
                <PostForm value={value} option={value} defaultValue='Категория' flag={true } idPutToDO={post.id} />
            </MyModal>
            <div>
                <button type="submit" onClick={() => { TodoService.deleteTodo(post.id,{Authorization: 'Token '+ JSON.parse(token) }); document.location.reload(); }}>Удалить</button>
            </div>
        </div>
    )
}

export default ToDoItem;