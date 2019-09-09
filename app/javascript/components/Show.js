// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'

// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class Show extends React.Component {
  constructor(){
    super()
    this.state = {
      added: false
    }
  }

  checkAdded = () => {
    let faves = JSON.parse(localStorage.getItem("faves"))
    let index = faves.findIndex(fave => fave.id === this.props.guide.id)
    let added
    if (index >= 0) {added = true} else {added = false}
    this.setState({
      added: added
    })
  }

  componentDidMount(){
    if (JSON.parse(localStorage.getItem("faves"))){
      this.checkAdded()
    }
  }

  // +++++++++++++++++++
  // RENDER
  // +++++++++++++++++++
  render () {
    return (
      <article className="show-article">
        <div className="show-guide-image">
          <img src={this.props.guide.image}/>
        </div><br />
        <div className="show-guide-title">
          <h1>
            {this.state.added ? "♥ " : ""}
            {this.props.guide.title}
          </h1>
        </div>
        <div className="guide-user">
          <h3>Uploaded by <span>{this.props.guide.username}</span></h3>
        </div><br />
        <div className="guide-body" dangerouslySetInnerHTML={{__html: this.props.guide.body}}>
        </div><br />
        <div className="guide-tags">
          <h4>{this.props.guide.tags}</h4>
        </div><br />
        <div className="guide-buttons">
          <ul>
            {this.state.added
              ?
              <li className="fav-btn" onClick={()=> {this.props.handleFave(this.props.guide, "remove"); this.checkAdded()}}>
                REMOVE FAVORITE
              </li>
              :
              <li className="fav-btn" onClick={()=> {this.props.handleFave(this.props.guide, "add"); this.checkAdded()}}>
                ADD TO FAVORITES
              </li>
            }

            <li onClick={() => {this.props.handleView('editGuide', this.props.guide)}}>EDIT GUIDE</li>
            <li onClick={() => {this.props.handleDelete(this.props.guide.id)}}>DELETE GUIDE</li>
          </ul>
        </div>
      </article>
    )
  }
}

export default Show
