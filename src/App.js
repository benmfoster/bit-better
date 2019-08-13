import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    const userInput = '';
    this.state = { userInput };
    this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  const name = event.target.name;
  this.setState({[name]: event.target.value});
}

  chatBox() {
    return (
      <div>
        <div>
          Output: {this.state.userInput}
        </div>
        <div>
          <form>
          <textarea type="text" class="input-lg form-control" rows="10" placeholder="Bit better? " name="userInput" value={this.state.userInput} onChange={this.handleChange} />
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
