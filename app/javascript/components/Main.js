// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react';
import Form from './Form.js';


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
        this.setState(prevState => {
          prevState.guides.push(jsonedGuide)
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
        <Form handleSubmit={this.addGuide} />
      </main>
    )
  }
}

// +++++++++++++++++++
// EXPORT
// +++++++++++++++++++
export default Main
