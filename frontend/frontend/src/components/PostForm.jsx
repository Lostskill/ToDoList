import React, { useState } from "react"; 
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import TodoService from "./API/ToDoService";

const PostForm = ({ value, option, defaultValue ,idP, flag}) => {
    const [title, setTitle] = useState({ title: '' });
    const [disc, setDisc] = useState({ description: '' })
    const [idPost, setIdPost] = useState()
    const [ids, setids] = useState();
    setIdPost(idP);
    
    function log(e) {
        setids(e)
    }

    async function PutForm(data,index) {
        const res = TodoService.putTodo(index, data);
        return res
    }

    async function PostForm(data) {
        const res = TodoService.postTodo(data);
        console.log(res)
    };


    const addNewPost = () => {
        const newPost = {
            title: title.title,
            description: disc.description,
            cat: Number(ids)
        }
        if (flag) {
            PostForm(newPost);
        }
        PutForm(newPost,idPost)
        
    }
    return (
        <form>
            <MyInput type='text' placeholder='Название Задачи' value={title.title} onChange={e => setTitle({title:e.target.value})} />
            <MyInput type='text' placeholder='Описание Задачи' value={disc.description} onChange={e => setDisc({ description: e.target.value })}  />
            <MySelect
            value={value}
            defaultValue = {defaultValue}
            option={option }
            onChange ={log}
            />
            <MyButton onClick={addNewPost} >Создать</MyButton>
        </form>
    )
}


export default PostForm;