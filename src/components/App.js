import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MainQuiz from './Quizzes/MainQuiz';
import Header from './Header'
import BaseballQuiz from './Quizzes/Baseball/BaseballQuiz';
import BaseballEasyQuiz from './Quizzes/Baseball/BaseballEasyQuiz';
import BaseballMediumQuiz from './Quizzes/Baseball/BaseballMediumQuiz';
import BasketballQuiz from './Quizzes/Basketball/BasketballQuiz';
import BasketballEasyQuiz from './Quizzes/Basketball/BasketballEasyQuiz';
import FootballQuiz from './Quizzes/FootballQuiz';



class App extends React.Component {
    render() {
    return (
        <div className="main">
        <div className="ui component">  
            <BrowserRouter>
                <div>
                <Header />
                <Switch>
                <Route path="/baseballhard" exact component={BaseballQuiz}/>
                <Route path="/basketball" exact component={BasketballQuiz}/>
                <Route path="/basketballeasy" exact component={BasketballEasyQuiz}/>
                <Route path="/Football" exact component={FootballQuiz}/>
                <Route path="/baseballeasy" exact component={BaseballEasyQuiz}/>
                <Route path="/baseballmedium" exact component={BaseballMediumQuiz}/>
                <Route path="/" exact component={Home}/>
                <Route path="/main" exact component={MainQuiz}/>
                </Switch>
                </div>
            </BrowserRouter>
        </div>
     
        </div>

    )
    }
}

export default App;
