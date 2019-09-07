// +++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++
import React from 'react'

// +++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++
class Header extends React.Component {
  render () {
    return (
      <header>
        <h1 onClick={() =>
          {this.props.handleView('index')}}>
            TROPHY HUNTER
        </h1>
          <form>
            <input
              type="text"
              placeholder="Search"
            />
          </form>
      </header>
    )
  }
}

// ++++++++++++++++++
// EXPORT
// ++++++++++++++++++
export default Header
