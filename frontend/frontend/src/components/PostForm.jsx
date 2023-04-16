import React, { useState } from "react"; 
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import TodoService from "./API/ToDoService";

const PostForm = ({ value, option, defaultValue, flag,idPutToDO, post})  => {
    const [title, setTitle] = useState({ title: '' });
    const [disc, setDisc] = useState({ description: '' })
    const [ids, setids] = useState();
    
    function log(e) {
        setids(e)
    }

    async function PutForm(data,index) {
        const token = localStorage.getItem('token');
        const res = TodoService.putTodo(index, data,{Authorization: 'Token '+ JSON.parse(token) });
        return res
    }

    async function PostForm(data) {
        const token = localStorage.getItem('token');
        const res = TodoService.postTodo(data,{Authorization: 'Token '+ JSON.parse(token) });
        console.log(res)
    };


    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            title: title.title,
            description: disc.description,
            cat: Number(ids)
        };
        
        if (flag) {
            PutForm(newPost, idPutToDO);
            document.location.reload();
        }
        else {
            PostForm(newPost);
            document.location.reload();
        };

    };
    return (
        <form>
            <MyInput type='text' placeholder='Название Задачи' value={title.title} onChange={e => setTitle({title:e.target.value})} />
            <MyInput type='text' placeholder='Описание Задачи' value={disc.description} onChange={e => setDisc({ description: e.target.value })}  />
            <MySelect
            value={value}
            defaultValue = {defaultValue}
            option={option}
            onChange ={log}
            />
            <MyButton onClick={addNewPost}  >Отправить</MyButton>
        </form>
    )
}


export default PostForm;