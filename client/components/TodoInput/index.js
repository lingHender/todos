import React, { Component } from 'react';
import 'react-date-picker/index.css';
import { DateField, Calendar} from 'react-date-picker';
import style from './style.less';
import moment from 'moment';

class TodoInput extends Component {
  constructor (props, content) {
    super(props, content);
    this.state = {
      name: this.props.name || '',
      time: this.props.time || new Date().getTime()
    }
  }

  handleChange (e) {
    this.setState({name: e.target.value});
  }

  handleSave (e) {
    const time = this.refs.dateField.getInput().value;
    console.log(time)
    const name = this.state.name;
    this.props.onSave({ name, time });
    if (this.props.editing) {
      this.setState({ name, time })
    } else {
      this.setState({name: '', time: new Date().getTime()})
    }
  }
  handleBlur () {
    if (this.props.editing) {
      this.props.onSave(this.oldName);
    }
  }
  handleCancel () {
    if (this.props.editing) {
      this.props.onCancel();
    } else {
      this.setState({name: '', time: new Date().getTime()})
    }
  }

  render () {
    return (
      <div className="todo-input">
        <input placeholder="What do you want to do next?"
               type="text"
               autoFocus="true"
               value={this.state.name}
               onChange={::this.handleChange}
              />
        <DateField ref="dateField"
          dateFormat="YYYY-MM-DD HH:mm:ss"
          defaultValue={this.state.time}
          />
        <button className="btn--save" onClick={::this.handleSave}><i className="iconfont icon-save"></i></button>
        <button className="btn--refresh" onClick={::this.handleCancel}><i className="iconfont icon-close"></i></button>
      </div>
    )
  }
}

export default TodoInput
