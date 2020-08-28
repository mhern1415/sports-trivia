import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            
            </div>
            </div>
    )

}

export default Header;