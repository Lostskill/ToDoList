import  React, {useState} from 'react';
import axios from 'axios';
import TodoList from "./components/TodoList";
import './App.css';
const API_URL = 'http://127.0.0.1:8000/api/todolist/';
function App(){
  const [post, setPosts] = useState([])
  async function fetchList() {
    const response = await axios.get(API_URL);
    console.log(response.data)
    setPosts(response.data)
    }
  return (
    <div>
      <button onClick={() => fetchList()}>Get</button>
      <TodoList post={post} title='Список Постов 1' />
    </div>
  )   
}
export default App;

