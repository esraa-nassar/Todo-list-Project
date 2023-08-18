/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import TodoItem from "./TodoItemComponent";

const TodoList = (props) => {
  return (
    <>
      <ul className="container my-5">
        {props.todoItems.length === 0 ? (
          <p className="text-center">No todo items</p>
        ) : (
          props.todoItems.map((todo) => {
            return (
              <TodoItem
                id={todo.id}
                todo={todo}
                key={todo.id}
                handleSubmit={props.handleSubmit}
                handleDelete={props.handleDelete}
                handeleToggle={props.handeleToggle}
              />
            );
          })
        )}
      </ul>
    </>
  );
};

export default TodoList;
