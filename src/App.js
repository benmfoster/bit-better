import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

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
      'Sad.', 
      'Bar.',
      'Liquor.',
      'Rocks.',
      'Concert.',
      'Pop.',
      'Boy Band.',
      'Beer genre 1.',
      'Yoga.',
      'Energize.',
      'Leg.',
      'Biggie.'
    ];
    const optionIndex = 0;
    const optionTwo = [
      'Happy!', 
      'Gym.',
      'Beer.',
      'Straight up.',
      'Stay home.',
      'Hip hop.',
      'Pop diva.',
      'Beer genre 2.',
      'Weights.',
      'Wind down.',
      'Arm.',
      'Tupac.'
    ];
    const questions = [
      'How are you feeling today?',
      'Bar guy or gym guy?',
      'Liquor or beer?',
      'Rocks or straight up?',
      'Concert or stay home?',
      'Pop or hip hop?',
      'Boy band or diva?',
      'A question about beer.',
      'Yoga or free weights?',
      'Energize or wind down?',
      'Leg Day or Arm Day?',
      'Biggie or Tupac?'
    ];
    const responseAPIs = [
      'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      'https://www.youtube.com/embed/videoseries?list=PLfQTY7JyiX6bEnVDJfABVXk5g_ew16es6',
      'https://www.thecocktaildb.com/api.php?ref=apilist.fun',
      'https://untappd.com/api/docs',
      'https://untappd.com/api/docs',
      'energy-yoga-vid',
      'meditative-yoga-vid',
      'leg-workout-vid',
      'arm-workout-vid',
      'pop-diva',
      'biggie-spotify-playlist',
      'tupac-spotify-playlist'
    ];
    const questionsIndex = 0;
    const result = ''
    this.state = {
      greeting,
      selectedOption,
      questions,
      questionsIndex,
      optionOne,
      optionTwo,
      optionIndex,
      result,
      responseAPIs
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
  this.newQuestion();
}

greeting() {
    return (
      <div>

        <h1 onClick={() => { 
          this.setState({ greeting: '' }); 
        }}>{ this.state.greeting }</h1>

          

      </div>
    )
}

newQuestion() {
  // cocktail story
  if(this.state.questionsIndex === 0 && this.state.selectedOption === 'option1') {
    const option = this.state.optionIndex + 1;
    const question = this.state.questionsIndex + 1;
    this.setState({
      optionIndex: option, 
      questionsIndex: question 
    }); 
  }
  if(this.state.questionsIndex === 1 && this.state.selectedOption === 'option1') {
    const option = this.state.optionIndex + 1;
    const question = this.state.questionsIndex + 1;
    this.setState({
      optionIndex: option, 
      questionsIndex: question 
    }); 
  }
  if(this.state.questionsIndex === 2 && this.state.selectedOption === 'option1') {
    const option = this.state.optionIndex + 1;
    const question = this.state.questionsIndex + 1;
    this.setState({
      optionIndex: option, 
      questionsIndex: question 
    }); 
  }
  if(this.state.questionsIndex === 3 && this.state.selectedOption === 'option1') {
    this.setState({
      result: 'cocktail-recipe',
      questionsIndex: 'out'
    });
  }
  
  // boy band story
  if(this.state.questionsIndex === 0 && this.state.selectedOption === 'option2') {
    const option = this.state.optionIndex + 4;
    const question = this.state.questionsIndex + 4;
    this.setState({
      optionIndex: option, 
      questionsIndex: question
    });
  } 
  if(this.state.questionsIndex === 4 && this.state.selectedOption === 'option1') {
    const option = this.state.optionIndex + 1;
    const question = this.state.questionsIndex + 1;
    this.setState({
      optionIndex: option, 
      questionsIndex: question
    }); 
  }
  if(this.state.questionsIndex === 5 && this.state.selectedOption === 'option1') {
    const option = this.state.optionIndex + 1;
    const question = this.state.questionsIndex + 1;
    this.setState({
      optionIndex: option, 
      questionsIndex: question 
    }); 
  }
  if(this.state.questionsIndex === 6 && this.state.selectedOption === 'option1') {
    this.setState({
      result: 'boy-band',
      questionsIndex: 'out'
    });
  }

  //pop diva story
  if(this.state.questionsIndex === 6 && this.state.selectedOption === 'option2') {
    this.setState({
      result: 'pop-diva',
      questionsIndex: 'out'
    });
  }

  //Biggie story
  if(this.state.questionsIndex === 5 && this.state.selectedOption === 'option2') {
    const option = this.state.optionIndex + 6;
    const question = this.state.questionsIndex + 6;
    this.setState({
      optionIndex: option, 
      questionsIndex: question 
    }); 
  }
  if(this.state.questionsIndex === 11 && this.state.selectedOption === 'option1') {
    this.setState({
      result: 'biggie-spotify-playlist', 
      questionsIndex: 'out'
    }); 
  }

  // Tupac story

  if(this.state.questionsIndex === 11 && this.state.selectedOption === 'option2') {
    this.setState({
      result: 'tupac-spotify-playlist', 
      questionsIndex: 'out'
    }); 
  }

  // martini story
if(this.state.questionsIndex === 3 && this.state.selectedOption === 'option2') {
  this.setState({
    result: 'martini-recipe',
    questionsIndex: 'out'
  })
}

  // beer stories
  if(this.state.questionsIndex === 2 && this.state.selectedOption === 'option2') {
    const option = this.state.optionIndex + 5;
    const question = this.state.questionsIndex + 5;
    this.setState({
      optionIndex: option, 
      questionsIndex: question 
    }); 
  }

  if(this.state.questionsIndex === 7 && this.state.selectedOption === 'option1') {
    this.setState({
      result: 'beer-genre1', 
      questionsIndex: 'out' 
    }); 
  }
  if(this.state.questionsIndex === 7 && this.state.selectedOption === 'option2') {
    this.setState({
      result: 'beer-genre2', 
      questionsIndex: 'out' 
    }); 
  }

  // gym stories
  if(this.state.questionsIndex === 1 && this.state.selectedOption === 'option2') {
    const option = this.state.optionIndex + 7;
    const question = this.state.questionsIndex + 7;
    this.setState({
      optionIndex: option, 
      questionsIndex: question 
    }); 
  }

    // yoga stories
    if(this.state.questionsIndex === 8 && this.state.selectedOption === 'option1') {
      const option = this.state.optionIndex + 1;
      const question = this.state.questionsIndex + 1;
      this.setState({
        optionIndex: option, 
        questionsIndex: question 
      }); 
    }
    if(this.state.questionsIndex === 9 && this.state.selectedOption === 'option1') {
      this.setState({
        result: 'energy-yoga-vid', 
        questionsIndex: 'out' 
      }); 
    }
    if(this.state.questionsIndex === 9 && this.state.selectedOption === 'option2') {
      this.setState({
        result: 'meditative-yoga-vid', 
        questionsIndex: 'out' 
      }); 
    }

    // weights stories
    if(this.state.questionsIndex === 8 && this.state.selectedOption === 'option2') {
      const option = this.state.optionIndex + 2;
      const question = this.state.questionsIndex + 2;
      this.setState({
        optionIndex: option, 
        questionsIndex: question 
      }); 
    }
    if(this.state.questionsIndex === 10 && this.state.selectedOption === 'option1') {
      this.setState({
        result: 'leg-workout-vid', 
        questionsIndex: 'out' 
      }); 
    }
    if(this.state.questionsIndex === 10 && this.state.selectedOption === 'option2') {
      this.setState({
        result: 'arm-workout-vid', 
        questionsIndex: 'out' 
      }); 
    }
}

displayQuestion() {
  return (
  <div>
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
      return (
        <div>
          {this.displayQuestion()}
          <h1 onClick={() => { this.resetPage() }}>Return</h1>
        </div>
      )
  }

  fin() {
    if(this.state.result === 'cocktail-recipe') {
      return (
      <div>
        {this.state.responseAPIs[0]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'boy-band') {
      return (
      <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[1]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>      
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      
      )
    }
    if(this.state.result === 'pop-diva') {
      return (
      <div>
        {this.state.responseAPIs[9]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      
      )
    }

    if(this.state.result === 'martini-recipe') {
      return (
        <div>
        {this.state.responseAPIs[2]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'beer-genre1') {
      return (
        <div>
        {this.state.responseAPIs[3]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'beer-genre2') {
      return (
        <div>
        {this.state.responseAPIs[4]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'energy-yoga-vid') {
      return (
        <div>
        {this.state.responseAPIs[5]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'meditative-yoga-vid') {
      return (
        <div>
        {this.state.responseAPIs[6]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'leg-workout-vid') {
      return (
        <div>
        {this.state.responseAPIs[7]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'arm-workout-vid') {
      return (
        <div>
        {this.state.responseAPIs[8]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'biggie-spotify-playlist') {
      return (
        <div>
        {this.state.responseAPIs[10]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'tupac-spotify-playlist') {
      return (
        <div>
        {this.state.responseAPIs[11]}
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
  }

resetPage() {
  this.setState({
    greeting: 'Welcome to Bit Better',
    selectedOption: 'option1',
    optionIndex: 0,
    questionsIndex: 0,
    result: ''
  })
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
    } else if(this.state.questionsIndex !== 'out') {
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
        <div id="particles-js">
          {this.fin()}
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
    }
    
  }
}

export default App;
 // particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#2793c0"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":9},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.1763753266952075,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":32.06824121731046,"random":true,"anim":{"enable":false,"speed":211.95215241065108,"size_min":64.9661769841076,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

