// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'
import Header from './Header.js'
import Aside from './Aside.js'
import Main from './Main.js'
import Footer from './Footer.js'

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
        image: null,
        tags: null,
        id: null
      },
      currentGuide: {
        title: null,
        username: null,
        body: null,
        image: null,
        tags: null,
        id: null
      },
      faves: []
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
      image: '',
      tags: '',
      id: null
    }
    let currentGuide = {
      title: '',
      username: '',
      body: '',
      image: '',
      tags: '',
      id: null
    }
    switch (view) {
      case 'index':
        pageTitle = 'NEW & UPDATED GAME GUIDES'
        break
      case 'show':
        pageTitle = 'GUIDE'
        currentGuide = {
          title: guide.title,
          username: guide.username,
          body: guide.body,
          image: guide.image,
          tags: guide.tags,
          id: guide.id
        }
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
          image: guide.image,
          tags: guide.tags,
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
      formInputs: formInputs,
      currentGuide: currentGuide
    })
  }

  fetchFaves = () => {
    let faves = JSON.parse(localStorage.getItem("faves"))
    this.state.faves = faves
    this.setState({faves: this.state.faves})
    console.log(this.state.faves);
  }

  handleFave = (guide) => {
    this.state.faves.push(guide)
    this.setState({faves: this.state.faves})
    let storedFaves = JSON.parse(localStorage.getItem("faves"))
    storedFaves.unshift(guide)
    localStorage.setItem("faves", JSON.stringify(storedFaves))
    console.log(JSON.parse(localStorage.getItem("faves")));
  }

  componentDidMount(){
    this.fetchFaves()
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
            formInputs={this.state.formInputs}
            currentGuide={this.state.currentGuide}
            handleFave={this.handleFave} />
          <Aside handleView={this.handleView} faves={this.state.faves} />
        </div>
        <Footer />
      </div>
    )
  }
}






// +++++++++++++++++++
// EXPORT
// +++++++++++++++++++
export default App
