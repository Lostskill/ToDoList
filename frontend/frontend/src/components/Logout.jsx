import React from "react";
import TodoService from "./API/ToDoService";

const LogOut = ()=>{
    function logout() {
      TodoService.logout();
    };
    localStorage.clear();
    logout();

    return (
      <h1>Вы вышли</h1>  
    );
};

export default LogOut;