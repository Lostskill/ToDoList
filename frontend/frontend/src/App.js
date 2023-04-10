import  React, {useEffect, useState} from 'react';
import axios from 'axios';
import TodoList from "./components/TodoList";
import './App.css';
import PostForm from './components/PostForm';
import TodoService from './components/API/ToDoService';
import Loader from './components/UI/Loader/Loader';

const POST_API_URL = 'http://127.0.0.1:8000/api/todolist/'
function App(){
  const [post, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const [isPostsLoading , setIsPostsLoading] = useState(false);

  
  useEffect(() => {
    fetchList()
  }, [])

  async function fetchList() {
    setIsPostsLoading(true);
    setTimeout(async() => {
    const response_data_todo = await TodoService.getTodo();
    const response_data_cat = await TodoService.getCategory();
    setPosts(response_data_todo);
    setCats(response_data_cat);
    setIsPostsLoading(false);
    },2000)
    
    }

  return (
    <div>
      <PostForm  value={cats} option={cats} defaultValue="Категория"  />
      {isPostsLoading 
      ? <div style={{display:'flex', justifyContent:'center', marginTop:50}}><Loader/></div>
      :<TodoList post={post} title='Список Постов 1' />
      }
    </div>
  )   
}
export default App;

