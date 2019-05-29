import React, { Component } from 'react';
import './App.css';

const questions = [
  { question: 'Choose a color', answers: ['gold' ,'black', 'blue', 'Green']}, 
  { question: 'Choose an animal', answers: ['Lion', 'Badger', 'Eagle', 'Snake']},
  { question: 'Choose a trait that represent you', answers: ['Brave', 'Loyal', 'Wise', 'Cunning']}
];

console.log(questions[0].answers[0]);

class App extends Component {
  constructor(){
    super();
    this.state = {
      questions: questions,
      answers: [''],
    }
  }
  

  initiationHandler = () => {
      //Display questions -> From display none to display flex
  }

  chooseHouseHandler = () => {
    console.log('I was clicked!!');
  }

  chosenAnswerHandler = (event) => {
    let value = event.target.value;
    this.setState({ answers: this.state.answers.concat(value)})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          WELCOME TO HOGWARTS!
        </header>
        <button onClick={this.initiationHandler}>Initiation</button>
        <QuestionsContainer 
          questions={this.state.questions} 
          answerChoice={this.chosenAnswerHandler}
        />
      </div>
    );
  }
}


function QuestionsContainer(props) {
  return(
    <div>
      {
        props.questions.map((question, idx) => {
          return (
            <QuestionMaker 
              key={idx} 
              question={question.question} 
              answer1={question.answers[0]}
              answer2={question.answers[1]}
              answer3={question.answers[2]}
              answer4={question.answers[3]}
              answerGiven={props.answerChoice}
            />
          ) 
        })
      }  
      <button onClick={props.addAnswer}>Submit</button>
    </div>
  );

}

function QuestionMaker(props) {
  return(
    <div>
      <h3>{props.question}</h3>
      <button onClick={props.answerGiven}>{props.answer1}</button>
      <button onClick={props.answerGiven}>{props.answer2}</button>
      <button onClick={props.answerGiven}>{props.answer3}</button>
      <button onClick={props.answerGiven}>{props.answer4}</button>
    </div>
  );
}

export default App;
