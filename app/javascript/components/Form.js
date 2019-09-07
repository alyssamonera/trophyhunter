// ======================
//     DEPENDENCIES
// ======================
// Quill package from: https://www.npmjs.com/package/react-quill
import React, {Component} from 'react';
import ReactQuill from 'react-quill';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      username: "",
      body: "",
      image: "",
      tags: "",
      id: null
    }
  }

  // ======================
  //        HANDLERS
  // ======================

  onChange = (event) => {
    if (event.target){
      this.setState({[event.target.id]: event.target.value})
    } else {
      this.setState({body: event})
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (this.checkFields()){
      const submission = {
        title: this.state.title,
        username: this.state.username,
        body: this.state.body,
        image: this.state.image,
        tags: this.state.tags,
        id: this.state.id
      }
      if (this.props.view.page === "addGuide") {
        this.props.handleAdd(submission)
      }
      else if (this.props.view.page === "editGuide"){
        this.props.handleUpdate(submission)
      }
      this.setState({
        title: "",
        username: "",
        body: "",
        image: "",
        tags: "",
        id: null
      })
    } else {
      alert("Please don't leave any fields empty!")
    }
  }

  checkFields = () => {
    if (this.state.title && this.state.username && this.state.body && this.state.image){
      return true
    } else {
      return false
    }
  }

  // ======================
  //      LIFE CYCLES
  // ======================
  componentDidMount(){
    this.setState({
      title: this.props.formInputs.title,
      username: this.props.formInputs.username,
      body: this.props.formInputs.body,
      image: this.props.formInputs.image,
      tags: this.props.formInputs.tags,
      id: this.props.formInputs.id
    })
  }

  // ======================
  // QUILL-SPECIFIC THINGS
  // ======================

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  // ======================
  //        RENDER
  // ======================

  render (){
    return (
      <form onSubmit={this.onSubmit}>
        <h2>
        {this.props.view.page === "addGuide"
        ? "Add a guide" : "Edit a guide"}
        </h2>
        <label htmlFor="title">Title</label>
        <input type="text" value={this.state.title} id="title" onChange={this.onChange}/>

        <label htmlFor="username">Username</label>
        <input type="text" value={this.state.username} id="username" onChange={this.onChange}/>

        <label htmlFor="image">Image URL</label>
        <input type="text" value={this.state.image} id="image" onChange={this.onChange}/>

        <label htmlFor="body">Body</label>
        <ReactQuill
          value={this.state.body}
          onChange={this.onChange}
          id="body"
          modules={this.modules}
          formats={this.formats} />

        <label htmlFor="tags">Tags</label>
        <input type="text" value={this.state.tags} id="tags" onChange={this.onChange}/>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form
