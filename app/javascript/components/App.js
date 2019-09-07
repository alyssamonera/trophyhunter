// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'
import Header from './Header.js'
import Aside from './Aside.js'
import Main from './Main.js'

// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'index',
        pageTitle: 'NEW & UPDATED GAME GUIDES'
      },
      formInputs: {
        title: null,
        username: null,
        body: null,
        url: null,
        image: null,
        id: null
      }
    }
  }
  // +++++++++++++++++++
  // HANDLERS
  // +++++++++++++++++++
  handleView = (view, guide) => {
    let pageTitle = ''
    let formInputs = {
      title: '',
      username: '',
      body: '',
      url: '',
      image: '',
      id: null
    }
    switch (view) {
      case 'index':
        pageTitle = 'NEW & UPDATED GAME GUIDES'
        break
      case 'show':
        pageTitle = 'GUIDE'
        break
      case 'addGuide':
        pageTitle = 'ADD GUIDE'
        break
      case 'editGuide':
        pageTitle = 'EDIT GUIDE'
        formInputs = {
          title: guide.title,
          username: guide.username,
          body: guide.body,
          url: guide.url,
          image: guide.image,
          id: guide.id
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }

  // +++++++++++++++++++
  // RENDER
  // +++++++++++++++++++
  render () {
    return (
      <div className="body-wrap">
        <Header handleView={this.handleView}/>
        <div className="content-wrap">
          <Main
            view={this.state.view}
            handleView={this.handleView}
            formInputs={this.state.formInputs}/>
        </div>
      </div>

    )
  }
}






// +++++++++++++++++++
// EXPORT
// +++++++++++++++++++
export default App
