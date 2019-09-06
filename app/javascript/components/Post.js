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
        {this.state.guides.map((guide) => (
          <div dangerouslySetInnerHTML={{__html: guide.body}}>
            <div className="post-header">
              <h1>{this.props.guide.title}</h1>
              <h2>{this.props.guide.username}</h2>
              <h2>{this.props.guide.url}</h2>
            </div>
            <div className="post-body">
              {this.props.guide.body}
            </div>
            <div className="post-options">
              <ul>
                <li onClick={() =>
                  {this.props.handleView('editGuide',
                  this.props.guide)}}>Edit Guide</li>
                <li onClick={() =>
                  {this.props.handleDelete(this.props.guide.id)
                }}>Delete Guide</li>
              </ul>
            </div>
          </div>
      </article>
    )
  }
}

export default Post
