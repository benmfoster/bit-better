import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    const greeting = { greeting: 'Welcome to Bit Better' };
    const selectedOption = 'option1';
    const questionOne = { question: 'Bit better?', active: true };
    const questionOneResponseOne = { response: "Freedom isn't free.", active: false }
    const questionOneResponseTwo = { response: "It is better to die a hero than to live long enough to see yourself become the villian.", active: false }
    this.state = { greeting, selectedOption, questionOne, questionOneResponseOne, questionOneResponseTwo };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
}

handleOptionChange (changeEvent) {
  console.log(changeEvent.target.value);
  this.setState({
    selectedOption: changeEvent.target.value
  });
}

handleSubmit(event) {
  event.preventDefault();
  if(this.state.selectedOption === 'option1') {
    const deactivateSecondResponse = this.state.questionOneResponseTwo;
    deactivateSecondResponse.active = false;
    const activateFirstResponse = this.state.questionOneResponseOne;
    activateFirstResponse.active = true;
    this.setState({ questionOneResponseOne: activateFirstResponse, questionOneResponseTwo: deactivateSecondResponse });
  } else {
    const deactivateFirstResponse = this.state.questionOneResponseOne;
    deactivateFirstResponse.active = false;
    const activateSecondResponse = this.state.questionOneResponseTwo;
    activateSecondResponse.active = true;
    this.setState({ questionOneResponseTwo: activateSecondResponse, questionOneResponseOne: deactivateFirstResponse });
  }
}

greeting () {
    return (
      <div>
        <h1 onClick={() => { 
          const removeGreeting = this.state.greeting;
          removeGreeting.greeting = '';
          this.setState({ greeting: removeGreeting }); 
        }}>{ this.state.greeting.greeting }</h1>
      </div>
    )
}

displayQuestion() {
  if (this.state.questionOne.active === true) {
    return this.state.questionOne.question;
  } else {
    return '';
  }
}

displayResponse() {
  if (this.state.questionOneResponseOne.active === true) {
    return this.state.questionOneResponseOne.response;
  } else if (this.state.questionOneResponseTwo.active === true) {
    return this.state.questionOneResponseTwo.response;
  } else {
    return '';
  }
}

  chatBox() {
    return (
      <div>
        <div>
          Question: { this.displayQuestion() }
        </div>
        <div>
          Response: { this.displayResponse() }
        </div>
          <form onSubmit={this.handleSubmit}>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="questionOneOptionOne" id="exampleRadios1" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
              <label class="form-check-label" for="exampleRadios1">
                Option 1
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="questionOneOptionTwo" id="exampleRadios2" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
              <label class="form-check-label" for="exampleRadios2">
                Option 2
              </label>
            </div>
            <input type="submit" class="btn btn-primary" value="Submit"/>
          </form>
        </div>
    )
  }

  render() {
    if (this.state.greeting.greeting.length > 0) {
      return (
        this.greeting()
      )
    } else {
      return (
        this.chatBox()
      )
    } 
    
  }
}
export default App;
