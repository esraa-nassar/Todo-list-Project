/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// import Footer from "./components/FooterComponent";
import TodoList from "./components/TodoListComponent";
import Form from "./components/FormComponent";

const App = () => {
  const [inputValue, setInputValue] = useState();
  const [todoItems, setTodoItem] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // clone & edit
    const newTodoItems = [
      ...todoItems,
      { id: crypto.randomUUID(), value: inputValue, completed: false },
    ];

    // setState
    setTodoItem(newTodoItems);

    // reset input value
    setInputValue("");
  };

  const handeleToggle = (id) => {
    // const completedTodo = [...todoItems];
    // const index = completedTodo.findIndex((todo) => todo.id === id);
    // completedTodo[index] = {
    //   ...completedTodo[index],
    // };
    // completedTodo[index].completed = !completedTodo[index].completed;
    // setTodoItem(completedTodo);

    const completedTodo = todoItems.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoItem(completedTodo);
  };

  const handleDelete = (id) => {
    // clone

    //edit
    const deletedTodoItem = todoItems.filter((todo) => todo.id != id);

    //setState
    setTodoItem(deletedTodoItem);
  };

  return (
    <>
      <div>
        <Form
          inputValue={inputValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <h2 className="text-center text-success">To Do List</h2>

        <TodoList
          todoItems={todoItems}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          handeleToggle={handeleToggle}
        />
      </div>
    </>
  );
};

export default App;
