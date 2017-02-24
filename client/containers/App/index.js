
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../../actions/todos';
import * as FilterAction from '../../actions/filter';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import TodoFilter from '../../components/TodoFilter';
import style from './style.less'

class App extends Component {
  render() {
    const { todos, actions, filter } = this.props;
    return (
      <article className="normal">
        <h1>Todos</h1>
        <TodoInput onSave={actions.addTodo}/>
        <TodoFilter filter={filter} changeFilter={actions.changeFilter}/>
        <TodoList todos={todos} filter={filter} actions={actions}/>
      </article>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...FilterAction, ...TodoActions}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
