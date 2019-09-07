// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'

// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class Post extends React.Component {

  // +++++++++++++++++++
  // RENDER
  // +++++++++++++++++++
  render () {
  return (
      <article>
        <div className="guide-image">
          <img src={this.props.guide.image}/>
        </div><br />
        <div className="guide-title">
        <h1 onClick={() => {this.props.handleView('showGuide',
        this.props.guide.id)}}>{this.props.guide.title}</h1>
        </div>
        <div className="guide-user">
          <h3>Uploaded by <span>{this.props.guide.username}</span></h3>
        </div><br />
        <div className="guide-body" dangerouslySetInnerHTML={{__html: this.props.guide.body}}>
        </div><br />
        <div className="guide-buttons">
          <ul>
            <li onClick={() => {this.props.handleView('editGuide', this.props.guide)}}>EDIT GUIDE</li>
            <li onClick={() => {this.props.handleDelete(this.props.guide.id)}}>DELETE GUIDE</li>
          </ul>
        </div>
      </article>
    )
  }
}

export default Post
