// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './TodoList.scss';

const TodoList = (props) => (
  <div className="todo-list">
    { props.todos.map( todo => <Todo onClick={props.onTodoClick} key={todo.id} {...todo} /> ) }
  </div>
);

export default TodoList;
