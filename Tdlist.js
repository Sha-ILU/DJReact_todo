import React from 'react';

const Tdlist = ({ todoItems }) => {
  return (
    <div>
      <h3>To-Do List</h3>
      <ul>
        {todoItems.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.description} - {todo.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tdlist;
