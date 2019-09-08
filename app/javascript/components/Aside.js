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
          <ul className="favorites">
            {this.props.faves.map((fave, index) =>
            <li key={index}
                onClick={() => {this.props.handleView("show", fave)}}>
                  {fave.title}
            </li>
          )}
          </ul>
      </aside>
    )
  }
}

// +++++++++++++++++++++++++++++++++
// EXPORT
// +++++++++++++++++++++++++++++++++
export default Aside
