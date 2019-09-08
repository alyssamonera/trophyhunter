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
        <div className="header-btn">
            <button className="mainpg-btn" onClick={() =>
              {this.props.handleView('index')}}>
                BACK TO MAIN PAGE
            </button>
            <button className="addGuide-btn" onClick={() =>
              {this.props.handleView('addGuide')}}>
                ADD A GUIDE
            </button>

        </div>
      </header>
    )
  }
}

// ++++++++++++++++++
// EXPORT
// ++++++++++++++++++
export default Header
