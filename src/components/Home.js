import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
return (
    <div>
    <div>Hello and welcome to Sports Trivia!</div>
    <Link to="/main" className="item">
                Main
    </Link>
    <Link to="/baseball" className="item">
                Baseball Quiz
    </Link>

    </div>
)
}

export default Home;