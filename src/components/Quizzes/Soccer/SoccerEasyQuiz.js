import React from "react";
import { SoccerEasyData } from "../../QuizData/Soccer/SoccerEasyData";
import ProgressBar from 'react-bootstrap/ProgressBar'


class SoccerEasyQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
    showing: false

  };
  refreshPage = () => {
    window.location.reload()
  }
  loadQuizData = () => {
    this.setState(() => {
      return {
        questions: SoccerEasyData[this.state.currentQuestion].question,
        answer: SoccerEasyData[this.state.currentQuestion].answer,
        options: SoccerEasyData[this.state.currentQuestion].options
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
          questions: SoccerEasyData[this.state.currentQuestion].question,
          options: SoccerEasyData[this.state.currentQuestion].options,
          answer: SoccerEasyData[this.state.currentQuestion].answer
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === SoccerEasyData.length - 1) {
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
    if (this.state.score === 8) {
      return (<div><h3>Nice! You know your stuff. You got 8 out of 8 correct!</h3></div>)
    }
    if (this.state.score === 7) {
      return (<div><h3>So close! You got 7 out of 8 correct!</h3></div>)
    }
    if (this.state.score === 6) {
      return(<div><h3>Not bad! You got 6 out of 8 correct!</h3></div>)
    }
    if (this.state.score === 5) {
      return (<div><h3>You got 5 out of 8 correct!</h3></div>)
    }
    if (this.state.score === 4) {
      return (<div><h3>You got 4 out of 8 correct!</h3></div>)
    }
    if (this.state.score === 3) {
      return (<div><h3>You got 3 out of 8 correct!</h3></div>)
    }
    if (this.state.score === 2) {
      return (<div><h3>You got 2 out of 8 correct!</h3></div>)
    }
    else {
      return (<div><h3>You've been shut out! You got zero questions correct.</h3></div>)
    }
  }
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    const percentage = ((currentQuestion) * 12.5);
    const { showing } = this.state;

    if (isEnd) {
      return ( <div className="ui container">

      <div className="gif-container">
          {this.renderMessage()}
          <br></br>
          <button className="ui yellow massive labeled icon button" onClick={() => this.setState({ showing: !showing })} ><i class="eye icon"></i>Show me the correct answers!</button>  
          <br></br>
        <div style={{ display: (showing ? 'block' : 'none') }}>
          <br></br>
          The correct answer's were:

          <ul>
            {SoccerEasyData.map((item, index) => (
              <li className="ui floating message options" key={index}>
                {item.answer}
              </li>
            ))}
          </ul>
        </div>
        <div className="App">
        <br></br>
        <button className="ui yellow massive labeled icon button" onClick={ this.refreshPage }><i class="redo icon"></i>
<span>Try Again!</span> </button> 
        </div>
  </div>
      </div>
    );
    } else {
      return (
        <div className="ui container">
        <div className="App">
          <br></br>
          <h3>{this.state.questions} </h3>
          <ProgressBar striped variant="warning" now={percentage} />
          <span>{`Question ${currentQuestion + 1} of ${SoccerEasyData.length}`}</span>
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
          {currentQuestion < SoccerEasyData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === SoccerEasyData.length - 1 && (
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

export default SoccerEasyQuiz;
