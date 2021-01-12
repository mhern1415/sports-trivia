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
import BasketballMediumQuiz from './Quizzes/Basketball/BasketballMediumQuiz';
import FootballQuiz from './Quizzes/Football/FootballQuiz';
import FootballEasyQuiz from './Quizzes/Football/FootballEasyQuiz';
import FootballMediumQuiz from './Quizzes/Football/FootballMediumQuiz';
import HockeyEasyQuiz from './Quizzes/Hockey/HockeyEasyQuiz'
import HockeyMediumQuiz from './Quizzes/Hockey/HockeyMediumQuiz'
import HockeyHardQuiz from './Quizzes/Hockey/HockeyHardQuiz'
import SoccerEasyQuiz from './Quizzes/Soccer/SoccerEasyQuiz'
import SoccerMediumQuiz from './Quizzes/Soccer/SoccerMediumQuiz'
import SoccerHardQuiz from './Quizzes/Soccer/SoccerHardQuiz'










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
                <Route path="/basketballhard" exact component={BasketballQuiz}/>
                <Route path="/basketballeasy" exact component={BasketballEasyQuiz}/>
                <Route path="/basketballmedium" exact component={BasketballMediumQuiz}/>
                <Route path="/footballhard" exact component={FootballQuiz}/>
                <Route path="/footballeasy" exact component={FootballEasyQuiz}/>
                <Route path="/footballmedium" exact component={FootballMediumQuiz}/>
                <Route path="/baseballeasy" exact component={BaseballEasyQuiz}/>
                <Route path="/baseballmedium" exact component={BaseballMediumQuiz}/>
                <Route path="/hockeyeasy" exact component={HockeyEasyQuiz}/>
                <Route path="/hockeymedium" exact component={HockeyMediumQuiz}/>
                <Route path="/hockeyhard" exact component={HockeyHardQuiz}/>
                <Route path="/soccereasy" exact component={SoccerEasyQuiz}/>
                <Route path="/soccermedium" exact component={SoccerMediumQuiz}/>
                <Route path="/soccerhard" exact component={SoccerHardQuiz}/>
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
