import React from "react";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import PageHeader from "./components/PageHeader";

import "./style.css";

const App = () => {
    return (
        <>
            <PageHeader />
            <div className="todo-container">
                <Header />
                <ul>
                    <TodoItem text="Eat" />
                    <TodoItem text="Code" />
                    <TodoItem text="Sleep" />
                    <TodoItem text="Repeat" />
                </ul>
                <Button />
            </div>
        </>
    );
};

export default App;
