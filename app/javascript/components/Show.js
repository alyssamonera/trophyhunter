// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'

// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class Show extends React.Component {

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
          <h1>{this.props.guide.title}</h1>
        </div>
        <div className="guide-user">
          <h3>Uploaded by <span>{this.props.guide.username}</span></h3>
        </div><br />
        <div className="guide-body" dangerouslySetInnerHTML={{__html: this.props.guide.body}}>
        </div><br />
        <div className="guide-tags">
          <h4>{this.props.guide.tags}</h4>
        </div><br />
        <div className="show-guide-buttons">
          <ul>
            <li onClick={() => {this.props.handleView('editGuide', this.props.guide)}}>EDIT GUIDE</li>
            <li onClick={() => {this.props.handleDelete(this.props.guide.id)}}>DELETE GUIDE</li>
          </ul>
        </div>
      </article>
    )
  }
}

export default Show
