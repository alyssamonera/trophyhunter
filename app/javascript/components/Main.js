// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'


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
      })
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
        <h1>title for now</h1>
      </main>
    )
  }
}

// +++++++++++++++++++
// EXPORT
// +++++++++++++++++++
export default Main
