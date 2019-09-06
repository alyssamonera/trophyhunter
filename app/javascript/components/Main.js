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
        {this.state.guides.map(guide =>
          <Post
            key={guide.id}
            guide={guide}
          />
        )}
        <Form handleSubmit={this.addGuide} />
      </main>
    )
  }
}

// +++++++++++++++++++
// EXPORT
// +++++++++++++++++++
export default Main
