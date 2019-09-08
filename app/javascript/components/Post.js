// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react';
import Show from './Show.js';

// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class Post extends React.Component {
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
      <article className="post-article">
        <div className="guide-contents-wrap">
          <div className="text-wrap">
            <div className="guide-title">
              <h1 onClick={() => {this.props.handleView('show',
              this.props.guide)}}>{this.props.guide.title}</h1>
            </div>
            <div className="guide-user">
              <h4>Uploaded by <span>{this.props.guide.username}</span></h4>
            </div>
            <div className="guide-tags">
              <ul>
                {this.props.guide.tags.split(", ").map((tag, index) =>
                <li key={index}> #{tag} </li>
                )}
              </ul>
            </div>
          </div>
          <div className="guide-image">
            <img src={this.props.guide.image}/>
          </div>
        </div>
          <div className="guide-buttons">
            <ul>

              {this.state.added
                ?
                <li onClick={()=> {this.props.handleFave(this.props.guide, "remove"); this.checkAdded()}}>
                  REMOVE FAVORITE
                </li>
                :
                <li onClick={()=> {this.props.handleFave(this.props.guide, "add"); this.checkAdded()}}>
                  ADD TO FAVORITES
                </li>
              }

              <li className="edit-btn" onClick={() => {this.props.handleView('editGuide', this.props.guide)}}>EDIT GUIDE</li>
              <li onClick={() => {this.props.handleDelete(this.props.guide.id)}}>DELETE GUIDE</li>
            </ul>
          </div>

      </article>
    )
  }
}

export default Post
