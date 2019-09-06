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
        image: null
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
      image: ''
    }
    switch (view) {
      case 'index':
        pageTitle = 'NEW & UPDATED GAME GUIDES'
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
          image: guide.image
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      }
    })
  }

  // +++++++++++++++++++
  // RENDER
  // +++++++++++++++++++
  render () {
    return (
      <div className="body-wrap">
        <Header/>
        <div className="content-wrap">
          <Main
            view={this.state.view}
            handleView={this.handleView}/>
        </div>
      </div>

    )
  }
}






// +++++++++++++++++++
// EXPORT
// +++++++++++++++++++
export default App
