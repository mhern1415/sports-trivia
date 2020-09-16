import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
return (
    <div className="App">
    <div className="ui huge header">
    <h3>Welcome! Select a sport to begin!</h3>
    <br></br>
    </div>
        <div className="home">
            <div className="ui stackable two column grid">
                <div className="column">
                    <Link to="/main" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="globe icon"></i>
                      All Sports
                    </button>
                    </Link>
                </div>
                <div className="column">
                    <Link to="/baseball" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="baseball ball icon"></i> 
                     Baseball Quiz
                    </button>
                    </Link>
                </div>
                <div className="column">
                    <Link to="/football" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="football ball icon"></i>
                     Football Quiz
                    </button>
                    </Link>
                </div>
                <div className="column">
                    <Link to="/basketball" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="basketball ball icon"></i>Basketball Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    
)
}

export default Home;