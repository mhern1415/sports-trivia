import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MainQuiz from './MainQuiz';

class App extends React.Component {
    render() {
    return (
        <div className="main">
        <div className="ui component">  
            <BrowserRouter>
                <div>
              
                <Switch>
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
