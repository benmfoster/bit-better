import React from 'react';
import './App.css';
import interact from 'interactjs'

// var particlesJS = require('../public/particles.js-master/particles.js')

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });



class App extends React.Component {

  constructor(props) {
    super(props)
    const greeting = { greeting: 'Welcome to Bit Better' };
    const selectedOption = 'option1';
    const questionOne = { question: 'Choose one.' };
    const questionOneResponseOne = { response: "“You always know when you’re going to arrive. If you go by car, you don’t. Apart from anything else, I prefer cycling. It puts you in a good mood, I find.” — Alan Bennett, British playwright", active: false }
    const questionOneResponseTwo = { response: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperstock.net%2Fwallpapers%2Fthumbs1%2F40079wide.jpg", active: false }
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
  const removeQuestion = this.state.questionOne;
  removeQuestion.question = ''
  this.setState({ questionOne: removeQuestion });
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
  if (this.state.questionOne.question.length > 0) {
    return this.state.questionOne.question;
  } else {
    return '';
  }
}

displayResponse() {
  
  if (this.state.questionOneResponseOne.active === true) {
    return this.state.questionOneResponseOne.response;
  } else if (this.state.questionOneResponseTwo.active === true) {
    return <img src={this.state.questionOneResponseTwo.response} alt="" />;
  } else {
    return '';
  }
}

  chatBox() {
    if(this.state.questionOneResponseOne.active === true || this.state.questionOneResponseTwo.active === true) {
      return (
        <div>
          <div>
            { this.displayResponse() }
          </div>
          <button>Continue</button>
        </div>
      )     
    } else {
      return (
        <div>
          <div>
            { this.displayQuestion() }
          </div>
         
            <form onSubmit={this.handleSubmit}>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="questionOneOptionOne" id="exampleRadios1" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
                <label class="form-check-label" for="exampleRadios1">
                  A bicycle
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="questionOneOptionTwo" id="exampleRadios2" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
                <label class="form-check-label" for="exampleRadios2">
                  A green mountain
                </label>
              </div>
              <input type="submit" class="btn btn-primary" value="Submit"/>
            </form>
          </div>
      )
    }
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
