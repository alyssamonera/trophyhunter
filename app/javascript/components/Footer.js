// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'

// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class Footer extends React.Component {
  render () {
    return (
      <footer>
        <h1 onClick={() =>
          {this.props.handleView('index')}}>
            TROPHY HUNTER
        </h1>
          <form >
            <input
              className="search"
              type="text"
              placeholder="Search"
            />
          </form>
      </footer>
    )
  }
}

// ++++++++++++++++++
// EXPORT
// ++++++++++++++++++
export default Footer
