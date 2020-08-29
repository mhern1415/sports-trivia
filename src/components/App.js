import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MainQuiz from './MainQuiz';
import Header from './Header'
import BaseballQuiz from './BaseballQuiz';



class App extends React.Component {
    render() {
    return (
        <div className="main">
        <div className="ui component">  
            <BrowserRouter>
                <div>
                <Header />
                <Switch>
                <Route path="/baseball" exact component={BaseballQuiz}/>
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
