import React from "react";
import TodoItems from "./TodoItems";

const TodoList = ({ post, title, value, option }) => {

    return (
        <div className="List">
            <h1 style={{ textAlign: "center", }}>{title}</h1>

            {post.map((post) =>
                <TodoItems post={post} key={post.id} value={value} option={option} />
            )}
        </div>
    );
};

export default TodoList;