// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react';
import Form from './Form.js';
import Post from './Post.js';


// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      guides: []
    }
  }

  fetchGuides = () => {
    fetch('/guides')
      .then(data => data.json())
      .then(jData => {
        console.log(jData)
        this.setState({ guides: jData })
        console.log(this.state.guides);
      })
  }

  addGuide = (guide) => {
    fetch('/guides', {
      body: JSON.stringify(guide),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdGuide => {return createdGuide.json()})
      .then(jsonedGuide => {
        this.props.handleView('index')
        this.setState(prevState => {
          prevState.guides.unshift(jsonedGuide)
          return {guides: prevState.guides}
        })
      })
      .catch(err => console.log(err))
  }

  updateGuide = (guide) => {
    fetch(`/guides/${guide.id}`, {
      body: JSON.stringify(guide),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedGuide => {
        this.props.handleView('index')
        this.setState(prevState => {
          let index = prevState.guides.findIndex(eachGuide => eachGuide.id === guide.id)
          prevState.guides.splice(index, 1, guide)
          return {guides: prevState.guides}
        })
      })
      .catch(err => console.log(err))
  }

  handleDelete = (id) => {
    fetch(`/guides/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.setState(prevState => {
          const guides = prevState.guides.filter( guide => guide.id !== id)
          return { guides }
        })
      })
      .catch(err => console.log(err))
  }

  // +++++++++++++++++++
  // LIFE CYCLE
  // +++++++++++++++++++
  componentDidMount() {
    this.fetchGuides()
  }

  // +++++++++++++++++++
  // RENDER
  // +++++++++++++++++++
  render () {
    return (
      <main>
        <h1>{this.props.view.pageTitle}</h1>
        {this.props.view.page === 'index'
          ? this.state.guides.map(guide => (
            <Post
              key={guide.id}
              guide={guide}
              handleView={this.props.handleView}
              handleDelete={this.handleDelete}
            />
          ))
          : <Form
              handleAdd={this.addGuide}
              handleUpdate={this.updateGuide}
              formInputs={this.props.formInputs}
              view={this.props.view} />
        }
      </main>
    )
  }
}

// +++++++++++++++++++
// EXPORT
// +++++++++++++++++++
export default Main
