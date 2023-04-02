import  React from  'react';
import axios from 'axios';
//import  CustomerCreateUpdate  from  './CustomerCreateUpdate'
import './App.css';
const API_URL = 'http://127.0.0.1:8000/api/todolist/';
function App(){
  async function fetchList() {
      const response = await axios.get(API_URL);
      console.log(response.data)
    }

  return (
    <div>
      <button onClick={() => fetchList()}>Get</button>
    </div>
  )   
}
export default App;

