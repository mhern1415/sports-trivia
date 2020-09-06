import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
return (
    <div>
    <div>Hello and welcome to Sports Trivia!</div>
    <Link to="/main" className="item">
                Main
    </Link>
    <br></br>
    <Link to="/baseball" className="item">
                Baseball Quiz
    </Link>
    <br></br>
    <Link to="/basketball" className="item">
                Basketball Quiz
    </Link>
    <br></br>
    <Link to="/football" className="item">
                Football Quiz
    </Link>
    </div>
)
}

export default Home;