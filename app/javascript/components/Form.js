import React, {Component} from 'react';
import MyEditor from './Editor.js';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      username: "",
      body: "",
      url: ""
    }
  }

  onChange = (event) => {
    if (event.target){
      this.setState({[event.target.id]: event.target.value})
    } else {
      this.setState({body: event})
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const submission = {
      title: this.state.title,
      username: this.state.username,
      body: this.state.body,
      url: this.state.url
    }
    this.props.handleSubmit(submission)
    this.setState({
      title: "",
      username: "",
      body: "",
      url: ""
    })
  }

  render (){
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" value={this.state.title} id="title" onChange={this.onChange}/>

        <label htmlFor="body">Body</label>
        <MyEditor handleChange={this.onChange} id="body"/>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form
