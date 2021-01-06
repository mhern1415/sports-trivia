import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
return (
    <div className="App">
    <div className="ui huge header">
    <br></br>
    <h3>Welcome! Select a sport to begin!</h3>
    <br></br>
    </div>
        <div className="home">
            <div className="ui stackable five column grid">
                
                <div className="column">
                    <div className="ui centered card">
                    <div class="header"><h2>Baseball</h2></div>
                    <div className="content">
                    <Link to="/baseballeasy" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="baseball ball icon"></i> 
                     Easy Quiz
                    </button>
                    </Link></div>
                    <div className="content">
                    <Link to="/baseballmedium" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="baseball ball icon"></i> 
                     Medium Quiz
                    </button>
                    </Link></div>
                    <div className="content"><Link to="/baseballhard" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="baseball ball icon"></i> 
                     Hard Quiz
                    </button>
                    </Link></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui centered card">
                    <div class="header"><h2>Football</h2></div>
                    <div className="content"><Link to="/footballeasy" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="football ball icon"></i>Easy Quiz</button>
                    </Link></div>
                    <div className="content"><Link to="/footballmedium" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="football ball icon"></i>
                     Medium Quiz
                    </button>
                    </Link></div>
                    <div className="content"><Link to="/footballhard" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="football ball icon"></i>
                     Hard Quiz
                    </button>
                    </Link></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui centered card">
                    <div class="header"><h2>Basketball</h2></div>
                    <div className="content"><Link to="/basketballeasy" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="basketball ball icon"></i>Easy Quiz</button>
                    </Link></div>
                    <div className="content"><Link to="/basketballmedium" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="basketball ball icon"></i>Medium Quiz</button>
                    </Link></div>
                    <div className="content"><Link to="/basketball" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="basketball ball icon"></i>Hard Quiz</button>
                    </Link></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui centered card">
                    <div class="header"><h2>Hockey</h2></div>
                    <div className="content"><Link to="/hockeyeasy" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="hockey puck icon"></i>Easy Quiz</button>
                    </Link></div>
                    <div className="content"><Link to="/hockeymedium" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="hockey puck icon"></i>Medium Quiz</button>
                    </Link></div>
                    <div className="content"><Link to="/hockeyhard" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="hockey puck icon"></i>Hard Quiz</button>
                    </Link></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui centered card">
                    <div class="header"><h2>Soccer</h2></div>
                    <div className="content"><Link to="/soccereasy" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="futbol icon"></i>Easy Quiz</button>
                    </Link></div>
                    <div className="content"><Link to="/soccermedium" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="futbol icon"></i>Medium Quiz</button>
                    </Link></div>
                    <div className="content"><Link to="/soccereasy" className="item">
                    <button class="ui yellow massive labeled icon button">
                    <i class="futbol icon"></i>Hard Quiz</button>
                    </Link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
)
}

export default Home;