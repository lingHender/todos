import React, { Component } from 'react';
import style from './style.less';

class TodoFilter extends Component {
  constructor(props, content) {
    super(props, content);
    this.state = {filter: this.props.filter}
  }
  handleClick (name) {
    this.props.changeFilter({filter: name});
    this.setState({filter: name});
  }
   render () {
    return (
      <div className="todo-filter">
        <button className={"tab tab--all " + (this.state.filter === "ALL" ? "tab--active" : "")} onClick={()=>this.handleClick('ALL')}>ALL<span className="label">10</span></button>
        <button className={"tab tab--undo " + (this.state.filter === "UNDO" ? "tab--active" : "")} onClick={()=>this.handleClick('UNDO')}>UNDO<span className="label">6</span></button>
        <button className={"tab tab--done " + (this.state.filter === "DONE" ? "tab--active" : "")} onClick={()=>this.handleClick('DONE')}>DONE<span className="label">4</span></button>
      </div>
    )
  }
}

export default  TodoFilter
