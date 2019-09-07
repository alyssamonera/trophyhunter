// ======================
//     DEPENDENCIES
// ======================
// Quill package from: https://www.npmjs.com/package/react-quill
import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      title: "",
      username: "",
      body: "",
      url: "",
      image: ""
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
    const submission = {
      title: this.state.title,
      username: this.state.username,
      body: this.state.body,
      url: this.state.url,
      image: this.state.image
    }
    this.props.handleSubmit(submission)
    this.setState({
      title: "",
      username: "",
      body: "",
      url: ""
    })
  }

  // ======================
  //      LIFE CYCLES
  // ======================
  componentDidMount(){
    this.setState({
      title: this.props.formInputs.title,
      username: this.props.formInputs.username,
      body: this.props.formInputs.body,
      url: this.props.formInputs.url,
      image: this.props.formInputs.image
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
        {this.props.view.page === "addPage"
        ? "Add a guide" : "Edit a guide"}
        </h2>
        <label htmlFor="title">Title</label>
        <input type="text" value={this.state.title} id="title" onChange={this.onChange}/>

        <label htmlFor="username">Username</label>
        <input type="text" value={this.state.username} id="username" onChange={this.onChange}/>

        <label htmlFor="url">Source URL (optional)</label>
        <input type="text" value={this.state.url} id="url" onChange={this.onChange}/>

        <label htmlFor="image">Image URL (optional)</label>
        <input type="text" value={this.state.image} id="image" onChange={this.onChange}/>

        <label htmlFor="body">Body</label>
        <ReactQuill
          value={this.state.body}
          onChange={this.onChange}
          id="body"
          modules={this.modules}
          formats={this.formats} />

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form
