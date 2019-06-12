import React from "react";
import PropType from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => (onTodoClick = index)} />
    ))}
  </ul>
);

TodoList.propType = {
  todos: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      completed: PropType.bool.isRequired,
      text: PropType.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropType.func.isRequired
};

export default TodoList;
