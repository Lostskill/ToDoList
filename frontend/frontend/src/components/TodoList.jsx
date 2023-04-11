import React from "react";
import TodoItems from "./TodoItems";
const TodoList = ({ post, title , value}) => { 
    const data = [post, value];
    console.log(data)
    
    return (
        <div className="List">
            <h1 style={{ textAlign: "center", }}>{title}</h1>

            { post.map((post) =>
                <TodoItems post={post} key={post.id} value={value}  />
                )}
        </div>
    )
}

export default TodoList;