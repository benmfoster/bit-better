import React from 'react';
import './App.css';
import Particles from 'react-particles-js';


class App extends React.Component {


  constructor(props) {
    
    super(props)
    const greeting = 'Welcome to Bit Better';
    const selectedOption = 'option1';
    const optionOne = [
      '/img/1-sad.png', 
      '/img/2-bar.jpg',
      '/img/3-liquor.jpg',
      '/img/4-rocks.jpg',
      '/img/5-concert.png',
      '/img/6-pop.png',
      '/img/7-boyband.jpg',
      '/img/8-macro.png',
      '/img/9-yoga.png',
      '/img/10-energize.png',
      '/img/11-leg.png',
      '/img/12-biggie.png',
      '/img/13-netflix.png',
      '/img/14-movie.png',
      '/img/15-salty.png'
    ];
    const optionIndex = 0;
    const optionTwo = [
      '/img/1-happy.png', 
      '/img/2-gym.jpg',
      '/img/3-beer.png',
      '/img/4-straightup.jpg',
      '/img/5-home.png',
      '/img/6-hiphop.png',
      '/img/7-popdiva.png',
      '/img/8-micro.png',
      '/img/9-weights.png',
      '/img/10-winddown.png',
      '/img/11-arm.png',
      '/img/12-tupac.png',
      '/img/13-foodnetwork.png',
      '/img/14-tv.png',
      '/img/15-sweet.png'
    ];
    const questions = [
      'How are you feeling today?',
      'Bar guy or gym guy?',
      'Liquor or beer?',
      'Rocks or straight up?',
      'Go out or stay home?',
      'Pop or hip hop?',
      'Boy band or diva?',
      'Macro or Micro? 😎',
      'Yoga or free weights?',
      'Energize or wind down?',
      'Leg Day or Arm Day?',
      'Biggie or Tupac?',
      'Netflix and chill or Food Network and eat?',
      'Movie or TV show?',
      'Salty or sweet?'
    ];
    const responseAPIs = [
      'https://www.youtube.com/embed/joqDgv35w1Y',
      // rocks cocktail
      'https://www.youtube.com/embed/videoseries?list=PLfQTY7JyiX6bEnVDJfABVXk5g_ew16es6',
      // boyband^
      'https://www.youtube.com/embed/EfrZL-q5Xf8',
      // martini
      'https://www.youtube.com/embed/NMWx4DE7JY4',
      // micro^
      'https://www.youtube.com/embed/AeKgCIfmUYc',
      // macrto^
      'https://www.youtube.com/embed/K-Ina_WW4Yc', 
      // energy yoga^
      'https://www.youtube.com/embed/BiWDsfZ3zbo',
      // meditation yoga^
      'https://www.youtube.com/embed/0rUHHiAAIrE',
      // leg day^
      'https://www.youtube.com/embed/ZLzKJEclj48',
      // arm day^
      'https://www.youtube.com/embed/videoseries?list=PLw8YSrb2y7zM6SOibmEC52SW8P4ImKKim', 
      // pop diva playlist^
      'https://www.youtube.com/embed/videoseries?list=RDEM_uQu2suzhQwyacPk3GQKJg',
      // biggie playlist^
      'https://www.youtube.com/embed/videoseries?list=PLTHVfDbNnxSbk8uy7P1cUsQWsMvf8bDIk',
      //  tupac playlist  ^
      'https://www.youtube.com/embed/videoseries?list=PLvahqwMqN4M0UXgBYznO18lSYjzRj-gT-',
      // movie
      'https://www.youtube.com/embed/videoseries?list=PLvahqwMqN4M1QEN4SyuXrgO3_Wf3p6gj3',
      // tv
      'https://www.youtube.com/embed/videoseries?list=PL8zglt-LDl-jm3v9hCQa84Lp13aYdVxV_',
      // salty
      'https://www.youtube.com/embed/videoseries?list=G5ze456xmc8&list=PL8zglt-LDl-gZa9icq9eqs_vtRew5gy2-'
      // sweet
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
        <div id="container">

          <h2 class="greeting" onClick={() => { 
           this.setState({ greeting: '' }); 
        }}>{ this.state.greeting }</h2>
        <p>An inspirational wellness quiz bot.</p>
          <Particles
            params = 
            {
              {
                particles:
                {
                number:
                  {
                    value:250,
                    density:
                      {
                        enable:true,
                        value_area:800
                      }
                  },
                color:
                  {
                    value:"#fff1ff"
                  },
                shape:
                  {
                    "type":"triangle",
                    "stroke":
                      {
                        "width":3,
                        "color":"#044000"
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
                  {"value":1,"random":false,"anim":
                    {
                      "enable":true,
                      "speed":10,
                      "opacity_min":0,
                      "sync":false
                    }
                  },
                size:
                  {
                    "value":8,
                    "random":true,"anim":
                    {
                      "enable":false,
                      "speed":10,
                      "size_min":0.3,
                      "sync":true
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
                    "direction":"up",
                    "random":false,
                    "straight":false,
                    "out_mode":"out",
                    "bounce":true,
                    "attract":
                      {
                        "enable":false,
                        "rotateX":600,"rotateY":600
                      }
                  },
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
          />
          </div>
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

  // drama story
  if(this.state.questionsIndex === 4 && this.state.selectedOption === 'option2') {
    const option = this.state.optionIndex + 8;
    const question = this.state.questionsIndex + 8;
    this.setState({
      optionIndex: option, 
      questionsIndex: question
    }); 
  }
  if(this.state.questionsIndex === 12 && this.state.selectedOption === 'option1') {
    const option = this.state.optionIndex + 1;
    const question = this.state.questionsIndex + 1;
    this.setState({
      optionIndex: option, 
      questionsIndex: question
    }); 
  }
  if(this.state.questionsIndex === 13 && this.state.selectedOption === 'option1') {
    this.setState({
      result: 'drama-vid', 
      questionsIndex: 'out'
    }); 
  }

  // comedy story
  if(this.state.questionsIndex === 13 && this.state.selectedOption === 'option2') {
    this.setState({
      result: 'comedy-vid', 
      questionsIndex: 'out'
    }); 
  }

  // salty story
  if(this.state.questionsIndex === 12 && this.state.selectedOption === 'option2') {
    const option = this.state.optionIndex + 2;
    const question = this.state.questionsIndex + 2;
    this.setState({
      optionIndex: option, 
      questionsIndex: question
    }); 
  }
    if(this.state.questionsIndex === 14 && this.state.selectedOption === 'option1') {
      this.setState({
        result: 'salty',
        questionsIndex: 'out'
      })
    }

// sweet story

if(this.state.questionsIndex === 14 && this.state.selectedOption === 'option2') {
  this.setState({
    result: 'sweet',
    questionsIndex: 'out'
  })
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
  <div id="particles-js">
      <div id="container">
      <h2>
        { this.state.questions[this.state.questionsIndex] }
      </h2>
      
        <form onSubmit={this.handleSubmit}>

          <div class="option-selector animated zoomIn">
            
            <input class="radio-item" type="radio" name="questionOneOptionOne" id="exampleRadios1" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
            <label class="label-item" for="exampleRadios1">
              <img src={this.state.optionOne[this.state.optionIndex]} class="img-option"/>
            </label>

            <input class="radio-item" type="radio" name="questionOneOptionTwo" id="exampleRadios2" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
            <label class="label-item" for="exampleRadios2">
              <img src={this.state.optionTwo[this.state.optionIndex]} class="img-option"/>
            </label>

          </div>

          <div class="btn-wrapper"><input type="submit" class="btn" value="◌"/></div>

        </form>
          </div>
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
          <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[0]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen alt="Loading.."></iframe>      
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
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[9]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      
      )
    }

    if(this.state.result === 'martini-recipe') {
      return (
        <div>
          <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[2]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>      
          <h1 onClick={() => { this.resetPage() }}>Return</h1>
        </div>
      )
    }
    if(this.state.result === 'beer-genre1') {
      return (
      <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[3]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>      
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'beer-genre2') {
      return (
      <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[4]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>      
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'energy-yoga-vid') {
      return (
      <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[5]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>      
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'meditative-yoga-vid') {
      return (
        <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[6]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'leg-workout-vid') {
      return (
        <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[7]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'arm-workout-vid') {
      return (
        <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[8]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'biggie-spotify-playlist') {
      return (
        <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[10]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'tupac-spotify-playlist') {
      return (
        <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[11]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'drama-vid') {
return (
      <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[12]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>      
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'comedy-vid') {
      return (
      <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[13]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>      
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'salty') {
      return (
      <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[14]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>      
        <h1 onClick={() => { this.resetPage() }}>Return</h1>
      </div>
      )
    }
    if(this.state.result === 'sweet') {
      return (
      <div>
        <iframe title="iframe" width="560" height="315" src={this.state.responseAPIs[15]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>      
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
        </div>
      )
    } else if(this.state.questionsIndex !== 'out') {
      return (
        <div id="particles-js-2">
          {this.chatBox()}
          <Particles 
            params = 
            {
              {
                particles:
                {
                number:
                  {
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
                    "random":true,"anim":
                    {
                      "enable":false,
                      "speed":4,
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
        <div id="particles-js-2">

          {this.fin()}
          <Particles 
            params = 
            {
              {
                particles:
                {
                number:
                  {
                    value:350,
                    density:
                      {
                        enable:true,
                        value_area:800
                      }
                  },
                color:
                  {
                    value:"#ff15ff"
                  },
                shape:
                  {
                    "type":"star",
                    "stroke":
                      {
                        "width":5,
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
                    "value":5,
                    "random":true,"anim":
                    {
                      "enable":false,
                      "speed":3,
                      "size_min":0.8,
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
          />

        </div>
      )
    }
    
  }
}

export default App;