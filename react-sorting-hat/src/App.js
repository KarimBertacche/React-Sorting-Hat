import React, { Component } from 'react';
import './App.css';

const questions = ['Choose a color?', 
                  'Choose an animal?', 
                  'Choose a trait that represent you'];

class App extends Component {
  constructor(){
    super();
    this.state = {
      questions: questions,
    }
  }

  initiationHandler = () => {
      //Display questions -> From display none to display flex
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          WELCOME TO HOGWARTS!
        </header>
        <button onClick={this.initiationHandler}>Initiation</button>
        <QuestionsContainer questions={this.state.questions} />
      </div>
    );
  }
}


function QuestionsContainer(props) {
  return(
    <div>
      <QuestionMaker question={props.questions}/>
    </div>
  );

}

function QuestionMaker(props) {
  return(
    <div>
      <h3>{props.question}</h3>
      <input 
        type="text"

      />

    </div>
  );
}

export default App;
