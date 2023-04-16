import {React} from "react";
import TodoService from "./API/ToDoService";
const LogOut = ()=>{
  function logout() {
      TodoService.logout();
    localStorage.clear();
    document.location.reload();
    document.location.reload();
  };

    
    return (
      <button onClick={logout} >Выйти</button>
    );
};

export default LogOut;