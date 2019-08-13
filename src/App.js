import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  chatBox() {
    return (
      <div>
        <div>
          Output.
        </div>
        <div>
          <form>
            <input />
          </form>
        </div>
      </div>
    )
  }

  render() {
    return (     
        this.chatBox()
    );
  }
}
export default App;
