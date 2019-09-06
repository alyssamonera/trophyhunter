import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, convertToRaw, RichUtils} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';

class MyEditor extends Component {
  constructor(){
    super()
    this.state = {
      editorState: EditorState.createEmpty(),
      editorContentHtml: ""
    };
  }

  _onBoldClick = (event) => {
    event.preventDefault()
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
      editorContentHtml: stateToHTML(editorState.getCurrentContent())
    });
    this.props.handleChange(this.state.editorContentHtml)
  }

  render(){
    return (
      <div>
        <button onClick={this._onBoldClick}>Bold</button>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default MyEditor
