import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ post, title }) => { 
    return (
        <div className="List">
            <h1 style={{ textAlign: "center", }}>{title}</h1>
            {post.map((post) =>
                <TodoItems post={post} key={post.id}/>
            )}
        </div>
    )
}

export default TodoList;