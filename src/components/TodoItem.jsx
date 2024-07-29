import React from "react";

const TodoItem = ({ text }) => {
    return (
        <li className="todo-item">
            <span>
                <input type="checkbox" />
                <span className="todo-item-text">{text}</span>
            </span>
            <p></p>
        </li>
    );
};

export default TodoItem;
