/* eslint-disable react/prop-types */
import List from "./styledComponents/List.Styled";

const TodoItem = (props) => {
  const { id, value, completed } = props.todo;

  return (
    <>
      <List className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={id}
          checked={completed}
          onChange={() => props.handeleToggle(id)}
        />
        <label
          className="form-check-label fs-5"
          htmlFor={id}
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {value}
        </label>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => {
            props.handleDelete(id);
          }}
        >
          Delete
        </button>
      </List>
    </>
  );
};

export default TodoItem;
