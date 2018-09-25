import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './carbon-components.css';

class App extends Component {
  render() {
    return (
      <div class="bg">
      <div class="box">
        <div class="bx--form-item">
  <strong class="bx--label">Upload File</strong>
  &nbsp;
  <div class="bx--file" data-file>
    <label
      for="your-file-importer-id-here"
      class="bx--file-btn bx--btn bx--btn--secondary"
      role="button"
      tabindex="0">Upload</label>
    <input
      type="file"
      class="bx--file-input"
      id="your-file-importer-id-here"
      data-file-uploader
      data-target="[data-file-container]"
      multiple
    />
    <div data-file-container class="bx--file-container"></div>
  </div>
</div>
      </div>
      </div> 
    );
  }
}

export default App;
