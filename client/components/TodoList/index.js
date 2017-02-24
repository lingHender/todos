import React, { Component } from 'react';
import TodoItem from '../TodoItem';
import style from './style.less';

class TodoList extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { todos, actions, filter } = this.props;
    return (
      <ul className="todo-list">
        {todos.map(todo => {
          if (filter === 'ALL') {
            return <TodoItem key={todo.id} todo={todo} {...actions}/>
          } else if (filter === 'DONE') {
            if (todo.done) {
              return <TodoItem key={todo.id} todo={todo} {...actions}/>
            }
          } else if (filter === 'UNDO') {
            if (!todo.done) {
              return <TodoItem key={todo.id} todo={todo} {...actions}/>
            }}
          }
        )}
      </ul>
    )
  }
}

export default TodoList
