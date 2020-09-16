import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
return (
    <div className="App">
    <div className="ui huge header">
    <p>Welcome! Select a sport to begin!</p>
    <br></br>
    </div>
        <div className="home">
            <div className="ui stackable two column grid">
                <div className="column">
                    <button class="ui yellow massive labeled icon button">
                    <i class="globe icon"></i>
                    <Link to="/main" className="item">
                      All Sports
                    </Link>
                    </button>
                </div>
                <div className="column">
                    <button class="ui yellow massive labeled icon button">
                    <i class="baseball ball icon"></i>
                    <Link to="/baseball" className="item">
                     Baseball Quiz
                    </Link>
                    </button>
                </div>
                <div className="column">
                    <button class="ui yellow massive labeled icon button">
                    <i class="football ball icon"></i>
                    <Link to="/football" className="item">
                     Football Quiz
                    </Link>
                    </button>
                </div>
                <div className="column">
                    <button class="ui yellow massive labeled icon button">
                    <i class="basketball ball icon"></i>
                    <Link to="/basketball" className="item">
                    Basketball Quiz
                    </Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
)
}

export default Home;