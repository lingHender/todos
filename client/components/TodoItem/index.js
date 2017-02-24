import React, { Component } from 'react';
import TodoInput from '../TodoInput';
import Moment from 'moment';
import style from './style.less';

class TodoItem extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {editing: false};
  }
  handleCheck (e) {
    this.props.completeTodo({id: this.props.todo.id})
  }
  handleDelete (e) {
    this.props.deleteTodo({id: this.props.todo.id})
  }
  handleUpdate (value) {
    this.props.updateTodo({id: this.props.todo.id, ...value});
    this.setState({editing: false});
  }
  handleCancel () {
    this.setState({editing: false});
  }
  triggerEdit (e) {
    this.setState({editing: true});
  }
  checkTime () {
    var timeTicker = setInterval(() => {
           console.log("checkTime");
        if( (0 < (this.props.todo.time - new Date().getTime()) &&  ( this.props.todo.time - new Date().getTime() )< 10*60*1000 ) ) {
            new Notification( 'you need to do', {
                                                    title: this.props.todo.name,
                                                    body: this.props.todo.name + 'before' + Moment(this.props.todo.time).format('YYYY-MM-DD HH:mm:ss')
                                                  });
            clearInterval(timeTicker);
        }
    }, 1000*5)
  }
  render () {
    const editing = this.state.editing;
    this.checkTime();
    if (editing) {
      return (
        <li className={"todo-item todo-item--editing " + (this.props.todo.done ? "todo-item--done" : "")}>
          <TodoInput name={this.props.todo.name}
                     time = {this.props.todo.time}
                     editing={this.state.editing}
                     onSave={::this.handleUpdate}
                     onCancel={::this.handleCancel}
          />
        </li>
      )
    } else {
      return (
        <li className={"todo-item " + (this.props.todo.done ? "todo-item--done" : "")}>
          <button className="btn--check" onClick={::this.handleCheck}><i className={"iconfont " + (this.props.todo.done ? "icon-circle-selected" : "icon-circle")}></i></button>
          <span>{this.props.todo.name}</span>
          <span>&nbsp;({Moment(this.props.todo.time).format('YYYY-MM-DD HH:mm:ss')})</span>
          <button className="btn--edit" onClick={::this.triggerEdit}><i className="iconfont icon-edit"></i></button>
          <button className="btn--close" onClick={::this.handleDelete}><i className="iconfont icon-close"></i></button>
        </li>
      )
    }
  }
}

export default TodoItem

