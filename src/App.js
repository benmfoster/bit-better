import React from 'react';
import './App.css';
import interact from 'interactjs'
import Particles from 'react-particles-js';
import Stats from 'stats';

// var particlesJS = require('../public/particles.js-master/particles.js')

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });



class App extends React.Component {


  constructor(props) {
    
    super(props)
    const greeting = 'Welcome to Bit Better';
    const selectedOption = 'option1';
    const optionOne = [
      'bicycle', 
      'a man',
      'south, beyond the compass, were grass grows a reddish hue, and all the words of the people are full of magic.',
      'red colors, the smell of berries, large brown mammals chewing on chestnuts.',
      'the south of southest south.',
      'less than a gram of weight, so you begin to float into the air like a geranium cast loose from its holding stem.',
      'a million hungry little fish nibbling on your toes.'
    ];
    const optionIndex = 0;
    const optionTwo = [
      'a green mountain', 
      'a song sung from the heart of the world.',
      'down, down, down beneath the unfathomable deeps.',
      'seething depths of bubbling curiosities, warbling calls of auburn-feathred birds, and the sea.',
      'the enchanting song of an ancient mystery.',
      'cupboards full of ceramic ware from time from her youth, now dusty and smelling of old dirt.',
      'caramel chocolates and cotton candy.'
    ];
    const responses = [
      "“You always know when you’re going to arrive. If you go by car, you don’t. Apart from anything else, I prefer cycling. It puts you in a good mood, I find.” — Alan Bennett, British playwright",
      "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperstock.net%2Fwallpapers%2Fthumbs1%2F40079wide.jpg", 
      "“Profound belief in something allows every individual to find an immense inner force, and to overcome his or her failings.” – Soichiro Honda", "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9806WHk1jH0%2Fmaxresdefault.jpg",
      "“What would you do if you weren't afraid?” ― Spencer Johnson, Who Moved My Cheese?",
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcascadeclimbers.com%2Fplab%2Fdata%2F513%2Fcold62.JPG",
      "“For whatever we lose (like a you or a me), It's always our self we find in the sea.” ― e.e. cummings",
      "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seabreeze.com.au%2FImg%2FPhotos%2FStand_Up_Paddle%2F7892808.jpg",
      "“Don't be ashamed to weep; 'tis right to grieve. Tears are only water, and flowers, trees, and fruit cannot grow without water. But there must be sunlight also. A wounded heart will heal in time, and when it does, the memory and love of our lost ones is sealed inside to comfort us.” ― Brian Jacques, Taggerung",
      "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fnoisypilgrims.files.wordpress.com%2F2010%2F06%2Fdsc_9723_filtered.jpg",
      "“Eventually, all things merge into one, and a river runs through it. The river was cut by the world's great flood and runs over rocks from the basement of time. On some of the rocks are timeless raindrops. Under the rocks are the words, and some of the words are theirs. I am haunted by waters.” ― Norman Maclean",
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.artsnursery.com%2Fproducts%2FBuxus_microphylla_GreenBeauty.jpg"
    ];
    const responsesIndex = 0;
    const questions = [
      'Choose one.',
      'I am born of water but when I return to water, I die. What am I?',
      'If love were a beautiful song, where would it be sung from?',
      'Where fare thee, gentle soul?',
      'Is it north or west that you desire?',
      'What beings eat lunch in the daytime?',
      'Could a man watch over his own visions?'
    ];
    const questionsIndex = 0;
    const questionResponseToggle = false;
    this.state = {
      greeting,
      selectedOption,
      questions,
      responses,
      questionsIndex,
      questionResponseToggle,
      optionOne,
      optionTwo,
      optionIndex,
      responsesIndex
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
}

handleOptionChange (changeEvent) {
  this.setState({
    selectedOption: changeEvent.target.value
  });
}

handleSubmit(event) {
  event.preventDefault();
  this.setState({ questionResponseToggle: true });
}

greeting () {
    return (
      <div>

        <h1 onClick={() => { 
          this.setState({ greeting: '' }); 
        }}>{ this.state.greeting }</h1>

          

      </div>
    )
}

displayResponse() { 
  if(this.state.selectedOption === 'option1') {
    return this.state.responses[this.state.responsesIndex];
  } else if(this.state.selectedOption === 'option2') {
    return <img src={this.state.responses[this.state.responsesIndex + 1]} alt="" />;
  } else {
    return '';
  }
}

newQuestion() {
  if(this.state.selectedOption === 'option1') {
    const option = this.state.optionIndex + 1
    const response = this.state.responsesIndex + 2
    const question = this.state.questionsIndex + 1
    this.setState({ 
      questionResponseToggle: false, 
      optionIndex: option, 
      responsesIndex: response, 
      questionsIndex: question 
    }); 
  } else if(this.state.selectedOption === 'option2') {
    const option = this.state.optionIndex + 2
    const response = this.state.responsesIndex + 4
    const question = this.state.questionsIndex + 2
    this.setState({ 
      questionResponseToggle: false, 
      optionIndex: option, 
      responsesIndex: response, 
      questionsIndex: question 
    }); 
  }  
}

displayQuestion() {
  return (
  <div>
    <Particles />
          <div>
            { this.state.questions[this.state.questionsIndex] }
          </div>
         
            <form onSubmit={this.handleSubmit}>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="questionOneOptionOne" id="exampleRadios1" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
                <label class="form-check-label" for="exampleRadios1">
                  {this.state.optionOne[this.state.optionIndex]}
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="questionOneOptionTwo" id="exampleRadios2" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
                <label class="form-check-label" for="exampleRadios2">
                  {this.state.optionTwo[this.state.optionIndex]}
                </label>
              </div>
              <input type="submit" class="btn btn-primary" value="Submit"/>
            </form>
          </div>
  )
}

  chatBox() {
   
    if(this.state.questionResponseToggle === true) {
      return (
        <div>
          <div>
            { this.displayResponse() }
          </div>
          <button onClick={() => {this.newQuestion()}}>
            Continue
          </button>
        </div>
      )     
    } else {
      return (
        <div>
          {this.displayQuestion()}
        </div>
      )
    }
  }

  fin() {
    return (
      <div>
        You are a beautiful person.
      </div>

    )
  }

  render() {
    if (this.state.greeting.length > 0) {
      return (
        <div id="particles-js">
        {this.greeting()}

        <Particles 
          params = 
          {
            {
              particles:
              {
              number:
                {
                  value:160,
                  density:
                    {
                      enable:true,
                      value_area:800
                    }
                },
              color:
                {
                  value:"#ffffff"
                },
              shape:
                {
                  "type":"circle",
                  "stroke":
                    {
                      "width":0,
                      "color":"#000000"
                    },
                  "polygon":
                    {
                      "nb_sides":5
                    },
                  "image":
                    {
                      "src":"img/github.svg",
                      "width":100,
                      "height":100
                    }
                },
              opacity:
                {"value":1,"random":true,"anim":
                  {
                    "enable":true,
                    "speed":1,
                    "opacity_min":0,
                    "sync":false
                  }
                },
              size:
                {
                  "value":3,
                  "random":true,"anim":
                  {
                    "enable":false,
                    "speed":4,
                    "size_min":0.3,
                    "sync":false
                  }
                },
              line_linked:
                {
                  "enable":false,
                  "distance":150,
                  "color":"#ffffff",
                  "opacity":0.4,
                  "width":1
                },
              move:
                {
                  "enable":true,
                  "speed":1,
                  "direction":"none",
                  "random":true,
                  "straight":false,
                  "out_mode":"out",
                  "bounce":false,
                  "attract":
                    {
                      "enable":false,
                      "rotateX":600,"rotateY":600
                    }
                },
              interactivity:
                {
                  "detect_on":"canvas",
                  "events":
                    {
                      "onhover":
                        {
                          "enable":true,
                          "mode":"bubble"
                        },
                      "onclick":
                        {
                          "enable":true,
                          "mode":"repulse"
                        },
                      "resize":true
                    },
                  "modes":
                    {
                      "grab":
                        {
                          "distance":400,
                          "line_linked":
                            {"opacity":1}
                        },
                      "bubble":
                        {
                          "distance":250,
                          "size":0,
                          "duration":2,
                          "opacity":0,
                          "speed":3
                        },
                      "repulse":
                        {
                          "distance":400,
                          "duration":0.4
                        },
                      "push":
                        {
                          "particles_nb":4
                        },
                      "remove":
                        {
                          "particles_nb":2
                        }
                    }
                },
                  "retina_detect":false
              }
            }
          }
        />
        </div>
      )
    } else if (this.state.questionsIndex < 7) {
      return (
        <div id="particles-js">
          {this.chatBox()}
          <Particles 
            params = 
            {
              {
                particles:
                {
                number:
                  {
                    value:160,
                    density:
                      {
                        enable:true,
                        value_area:800
                      }
                  },
                color:
                  {
                    value:"#ffffff"
                  },
                shape:
                  {
                    "type":"circle",
                    "stroke":
                      {
                        "width":0,
                        "color":"#000000"
                      },
                    "polygon":
                      {
                        "nb_sides":5
                      },
                    "image":
                      {
                        "src":"img/github.svg",
                        "width":100,
                        "height":100
                      }
                  },
                opacity:
                  {"value":1,"random":true,"anim":
                    {
                      "enable":true,
                      "speed":1,
                      "opacity_min":0,
                      "sync":false
                    }
                  },
                size:
                  {
                    "value":3,
                    "random":true,"anim":
                    {
                      "enable":false,
                      "speed":4,
                      "size_min":0.3,
                      "sync":false
                    }
                  },
                line_linked:
                  {
                    "enable":false,
                    "distance":150,
                    "color":"#ffffff",
                    "opacity":0.4,
                    "width":1
                  },
                move:
                  {
                    "enable":true,
                    "speed":1,
                    "direction":"none",
                    "random":true,
                    "straight":false,
                    "out_mode":"out",
                    "bounce":false,
                    "attract":
                      {
                        "enable":false,
                        "rotateX":600,"rotateY":600
                      }
                  },
                interactivity:
                  {
                    "detect_on":"canvas",
                    "events":
                      {
                        "onhover":
                          {
                            "enable":true,
                            "mode":"bubble"
                          },
                        "onclick":
                          {
                            "enable":true,
                            "mode":"repulse"
                          },
                        "resize":true
                      },
                    "modes":
                      {
                        "grab":
                          {
                            "distance":400,
                            "line_linked":
                              {"opacity":1}
                          },
                        "bubble":
                          {
                            "distance":250,
                            "size":0,
                            "duration":2,
                            "opacity":0,
                            "speed":3
                          },
                        "repulse":
                          {
                            "distance":400,
                            "duration":0.4
                          },
                        "push":
                          {
                            "particles_nb":4
                          },
                        "remove":
                          {
                            "particles_nb":2
                          }
                      }
                  },
                    "retina_detect":false
                }
              }
            }
          />

        </div>
      )
    } else {
      return (
        this.fin()
      )
    }
    
  }
}

export default App;
 // particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#2793c0"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":9},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.1763753266952075,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":32.06824121731046,"random":true,"anim":{"enable":false,"speed":211.95215241065108,"size_min":64.9661769841076,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

