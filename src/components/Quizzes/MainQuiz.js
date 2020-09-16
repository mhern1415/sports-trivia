import React from "react";
import { MainQuizData } from "../QuizData/MainQuizData";
import ProgressBar from 'react-bootstrap/ProgressBar'

class MainQuiz extends React.Component {
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
        questions: MainQuizData[this.state.currentQuestion].question,
        answer: MainQuizData[this.state.currentQuestion].answer,
        options: MainQuizData[this.state.currentQuestion].options
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
          questions: MainQuizData[this.state.currentQuestion].question,
          options: MainQuizData[this.state.currentQuestion].options,
          answer: MainQuizData[this.state.currentQuestion].answer
        };
      });
    }
  }

  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === MainQuizData.length - 1) {
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
    if (this.state.score === 5) {
      return (<div classname="gif"><iframe src="https://giphy.com/embed/2RGhmKXcl0ViM" width="300" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/yes-daniel-bryan-happy-2RGhmKXcl0ViM"></a></p><h3 className="end-message">Nice!! You got every question correct! Give yourself a pat on the back!</h3></div>)
    }
    if (this.state.score === 4) {
      return (<div><h3>Almost! You answered 3 questions correct!</h3></div>)
    }
    if (this.state.score === 3) {
      return(<div><h3>Not bad! You answered 2 questions correctly! Give it another shot!</h3></div>)
    }
    if (this.state.score === 2) {
      return (<div><h3>Well, 1 is better than none I guess... Try Again!!</h3></div>)
    }
    else {
      return (<div><h3>Start over and try this time..</h3></div>)
    }
  }



  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;
    const percentage = ((currentQuestion) * 20);
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
            {MainQuizData.map((item, index) => (
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
          <h3>{this.state.questions} </h3>
          <ProgressBar striped variant="warning" now={percentage} />
          <span>{`Question ${currentQuestion + 1} of ${MainQuizData.length}`}</span>
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
          {currentQuestion < MainQuizData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Next
            </button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === MainQuizData.length - 1 && (
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

export default MainQuiz;
