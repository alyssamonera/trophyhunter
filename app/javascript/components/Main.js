import React, {Component} from 'react';
import Form from './Form.js';

class Main extends Component {
  constructor(){
    super()
    this.state = {
      guides: []
    }
  }

  addGuide = (guide) => {
    fetch('/guides', {
      body: JSON.stringify(guide),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdGuide => {return createdGuide.json()})
      .then(jsonedGuide => {
        this.setState(prevState => {
          prevState.guides.push(jsonedGuide)
          return {guides: prevState.guides}
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        <Form handleSubmit={this.addGuide}/>
      </div>
    )
  }
}

export default Main
