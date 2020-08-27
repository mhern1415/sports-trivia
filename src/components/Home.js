import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
return (
    <div>
    <div>Hello</div>
    <Link to="/main" className="item">
                Main
            </Link>
    </div>
)
}

export default Home;