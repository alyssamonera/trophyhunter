// +++++++++++++++++++++++++++++++++
// DEPENDENCIES
// +++++++++++++++++++++++++++++++++
import React from 'react'

// +++++++++++++++++++++++++++++++++
// COMPONENT CLASS
// +++++++++++++++++++++++++++++++++
class Aside extends React.Component {
  // +++++++++++
  // RENDER
  // +++++++++++
  render () {
    return (
      <aside>
        <div className="aside-btn">
          <ul>
            <button className="mainpg-btn" onClick={() =>
              {this.props.handleView('index')}}>
                BACK TO MAIN PAGE
            </button><br />
            <button className="addGuide-btn" onClick={() =>
              {this.props.handleView('addGuide')}}>
                ADD A GUIDE
            </button>
          </ul>
          <ul className="tags">
            <li>TAG</li>
            <li>TAG</li>
            <li>TAG</li>
          </ul>
        </div>
      </aside>
    )
  }
}

// +++++++++++++++++++++++++++++++++
// EXPORT
// +++++++++++++++++++++++++++++++++
export default Aside
