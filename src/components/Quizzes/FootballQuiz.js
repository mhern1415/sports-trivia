import React from "react";
import { FootballData } from "../QuizData/FootballData";
import ProgressBar from 'react-bootstrap/ProgressBar'



class FootballQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };
  refreshPage = () => {
    window.location.reload()
  }
  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: FootballData[this.state.currentQuestion].question,
        answer: FootballData[this.state.currentQuestion].answer,
        options: FootballData[this.state.currentQuestion].options
      };
    });
  };

  componentDidMount() {
    this.loadQuizData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }
   
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: FootballData[this.state.currentQuestion].question,
          options: FootballData[this.state.currentQuestion].options,
          answer: FootballData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === FootballData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.myAnswer === this.state.answer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  renderMessage = () => {
    if (this.state.score === 4) {
      return (<div classname="gif"><iframe src="https://giphy.com/embed/2RGhmKXcl0ViM" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/yes-daniel-bryan-happy-2RGhmKXcl0ViM"></a></p><h3>Nice!! You got every question correct! Give yourself a pat on the back!</h3></div>)
    }
    if (this.state.score === 3) {
      return (<div><h3>Almost! You answered 3 questions correct!</h3></div>)
    }
    if (this.state.score === 2) {
      return(<div><h3>Not bad! You answered 2 questions correctly! Give it another shot!</h3></div>)
    }
    if (this.state.score === 1) {
      return (<div><h3>Well, 1 is better than none I guess... Try Again!!</h3></div>)
    }
    else {
      return (<div><h3>Start over and try this time..</h3></div>)
    }
  }
 
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    const percentage = ((currentQuestion) * 25);

    if (isEnd) {
      return (
        <div className="ui container">

        <div className="gif-container">
            {this.renderMessage()}
            <button onclick={this.myFunction()}>Try it</button>

          <div className="answers">
            The correct answer's were:
            <ul>
              {FootballData.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </div>
          <div className="App">
          <button className="ui button" onClick={ this.refreshPage }> <span>Try Again!</span> </button> 
          </div>
    </div>
        </div>
      );
    } else {
      return (
        
        <div className="ui container">
          
        <div className="App">
          <h1>{this.state.questions} </h1>
          <ProgressBar striped variant="warning" now={percentage} />
          <span>{`Question ${currentQuestion + 1} of ${FootballData.length}`}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < FootballData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === FootballData.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              Finish
            </button>
          )}
        </div>
        </div>
      );
    }
  }
}

export default FootballQuiz;
