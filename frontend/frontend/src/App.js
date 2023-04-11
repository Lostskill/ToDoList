import  React, {useEffect, useState} from 'react';
import TodoList from "./components/TodoList";
import './App.css';
import PostForm from './components/PostForm';
import TodoService from './components/API/ToDoService';
import Loader from './components/UI/Loader/Loader';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App(){
  const [post, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchList()
  }, [])

  async function fetchList() {
    setIsPostsLoading(true);
    const response_data_todo = await TodoService.getTodo();
    const response_data_cat = await TodoService.getCategory();
    setPosts(response_data_todo);
    setCats(response_data_cat);
    setIsPostsLoading(false);
  }

  return (
    <div>
      <MyButton style={{ marginTop: 30, marginbottom: 30, marginleft:300,marginright:300 }} onClick={() => setModal(true)}>
        Создать Пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
          <PostForm value={cats} option={cats} defaultValue="Категория" />
      </MyModal>
      {isPostsLoading 
        ?<div style={{display:'flex', justifyContent:'center', marginTop:50}}><Loader/></div>
        :<TodoList post={post} value={cats}   title='Список Постов ' />
      }
    </div>
  )   
}
export default App;

