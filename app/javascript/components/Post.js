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
        <div className="post-header">
          <h1>{this.props.guide.title}</h1>
        </div>
        <div className="post-body" dangerouslySetInnerHTML={{__html: this.props.guide.body}}>
        </div>
        <div className="post-options">
          <ul>
            <li onClick={() => {this.props.handleView('editGuide', this.props.guide)}}>edit guide</li>
            <li>delete guide</li>
          </ul>
        </div>
      </article>
    )
  }
}

export default Post
